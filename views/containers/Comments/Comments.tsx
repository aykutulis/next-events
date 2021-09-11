import React, { useCallback, useState } from 'react';

import { CommentList } from './CommentList';
import { NewComment } from './NewComment';
import { Comment, EventId } from '../../../types';
import styles from './Comments.module.css';

interface CommentsProps {
  eventId: EventId;
}

export const Comments: React.FC<CommentsProps> = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = useCallback(() => {
    setShowComments(!showComments);
  }, [showComments]);

  const addCommentHandler = useCallback((comment: Comment) => {
    // send data to API
  }, []);

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};
