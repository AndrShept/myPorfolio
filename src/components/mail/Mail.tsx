import React from 'react';
import styles from './Mail.module.scss';

export const Mail = () => {
  return (
    <section id='Mail' className={styles.container}>
      <h2 className={styles.text}>Mail</h2>

      <form
        action='https://getform.io/f/3423061b-c794-432c-aec3-d6bbd9b0933a'
        method='post'
      >
        <div className={styles.wrap}>
          <div className={styles.top}>
            <div>
              <label htmlFor=''>Name</label>
              <input type='text' placeholder='name' name='name' />
            </div>
            <div>
              <label htmlFor=''>Phone</label>
              <input type='number' placeholder='phone' name='phone' />
            </div>
          </div>

          <div className={styles.email}>
            <div>
              <label htmlFor=''>Email</label>
              <input type='email' placeholder='email' name='email'/>
            </div>
          </div>
          <div className={styles.subject}>
            <div>
              <label htmlFor=''>Subject</label>
              <input type='text' placeholder='subject' name='subject' />
            </div>
          </div>
          <div className={styles.message}>
            <div>
              <label htmlFor=''>Message</label>
              <textarea rows={10}></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className={styles.button}>
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};
