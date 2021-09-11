import React from 'react';

import styles from './CommentList.module.css';

export const CommentList: React.FC = () => {
  return (
    <ul className={styles.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Sigmund</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Nicola</address>
        </div>
      </li>
    </ul>
  );
};
