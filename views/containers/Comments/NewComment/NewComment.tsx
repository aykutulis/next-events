import React, { useCallback, useState } from 'react';

import { Comment } from '../../../../types';
import styles from './NewComment.module.css';

interface NewCommentProps {
  onAddComment: (comment: Comment) => void;
}

export const NewComment: React.FC<NewCommentProps> = ({ onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const onSubmitComment = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (
        !email ||
        email.trim() === '' ||
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === ''
      ) {
        setIsInvalid(true);
        return;
      }

      onAddComment({
        email,
        name,
        text,
      });
    },
    [name, email, text, onAddComment]
  );

  return (
    <form className={styles.form} onSubmit={onSubmitComment}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows={5} onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button type='submit'>Submit</button>
    </form>
  );
};
