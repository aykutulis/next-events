import React, { useCallback, useState } from 'react';

import { postNewsletter } from '../../../utils';
import styles from './NewsletterRegistration.module.css';

export const NewsletterRegistration: React.FC = () => {
  const [email, setEmail] = useState('');

  const onSubmitRegistration = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = await postNewsletter(email);
      console.log(data);
    },
    [email]
  );

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={onSubmitRegistration}>
        <div className={styles.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Register</button>
        </div>
      </form>
    </section>
  );
};
