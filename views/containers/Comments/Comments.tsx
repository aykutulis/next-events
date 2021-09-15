import React, { useCallback, useEffect, useState } from 'react';

import { CommentList } from './CommentList';
import { NewComment } from './NewComment';
import { postComment, getAllComments } from '../../../utils';
import { Comment, CommentFromServer, EventId } from '../../../types';
import styles from './Comments.module.css';

interface CommentsProps {
  eventId: EventId;
}

export const Comments: React.FC<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentFromServer[]>([]);

  useEffect(() => {
    if (!showComments) return;

    const run = async () => {
      const data = await getAllComments(eventId);
      setComments(data.comments);
    };

    run();
  }, [showComments, eventId]);

  const toggleCommentsHandler = useCallback(() => {
    setShowComments(!showComments);
  }, [showComments]);

  const addCommentHandler = useCallback(
    async (comment: Comment) => {
      const data = await postComment(eventId, comment);
      console.log(data);
    },
    [eventId]
  );

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};
