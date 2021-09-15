import React from 'react';

import { CommentFromServer } from '../../../../types';
import styles from './CommentList.module.css';

interface CommentListProps {
  comments: CommentFromServer[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.map((c) => (
        <li key={c.id}>
          <p>{c.text}</p>
          <div>
            By <address>{c.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};
