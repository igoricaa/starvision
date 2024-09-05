'use client';
import { useState } from 'react';
import styles from './NewsletterSection.module.scss';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted:', { email, accepted });
  };

  return (
    <section id='newsletter' className={styles.newsletter}>
      <div className={styles.newsletter__container}>
        <div className={styles.newsletter__header}>
          <h2 className={styles.newsletter__title}>
            Prijavite se na nas Newsletter
            <br />i budite u toku sa nasom ponudom
          </h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.newsletter__form}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.newsletter__input}
            required
          />
          <div className={styles.newsletter__formFooter}>
            <div className={styles.newsletter__checkbox}>
              <input
                type='checkbox'
                id='terms'
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className={styles.newsletter__checkboxInput}
              />
              <label
                htmlFor='terms'
                className={styles.newsletter__checkboxLabel}
              >
                Proverite nas Cookie policy, da bi znali kako koristimo podatke
              </label>
            </div>
            <button type='submit' className={styles.newsletter__button}>
              Prijavite se →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
