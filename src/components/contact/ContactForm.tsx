'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { useState } from 'react';
import Button from '../ui/Button';

type FormData = {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  last_name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (formData: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData, null, 2),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          reset();
          setMessage(
            'Your message has been sent successfully. Thank you for contacting me!'
          );
        } else {
          setIsSuccess(false);
          setMessage(
            'There was an error while sending your message. Please try again.'
          );
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage(
          'There was an error while sending your message. Please try again.'
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      {/* <input
        type='hidden'
        value='926a52fd-39dc-4aca-9ebd-655f76f4553f'
        {...register('access_key')}
      /> */}
      <input
        type='hidden'
        value='Kontakt forma sa starvision.com'
        {...register('subject')}
      />
      <input
        type='hidden'
        value='Kontakt forma starvision.com'
        {...register('from_name')}
      />
      <div className={styles.contactForm__fieldsRow}>
        <div className={styles.contactForm__fieldWrapper}>
          <input
            id='name'
            type='text'
            placeholder='Ime'
            {...register('name', {
              required: { value: true, message: '*obavezno polje' },
              maxLength: {
                value: 50,
                message: '*maksimalna dužina je 50 karaktera',
              },
            })}
            autoComplete='name'
            className={errors.name ? styles.error : ''}
          />
          <label htmlFor='name'>Vaše ime</label>
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.contactForm__fieldWrapper}>
          <input
            id='last_name'
            type='text'
            placeholder='Prezime'
            {...register('last_name', {
              required: { value: true, message: '*obavezno polje' },
              maxLength: {
                value: 50,
                message: '*maksimalna dužina je 50 karaktera',
              },
            })}
            autoComplete='family-name'
            className={errors.last_name ? styles.error : ''}
          />
          <label htmlFor='last_name'>Vaše prezime</label>
          {errors.last_name && (
            <p className={styles.errorMessage}>{errors.last_name.message}</p>
          )}
        </div>
      </div>
      <div className={styles.contactForm__fieldWrapper}>
        <input
          id='email'
          type='email'
          placeholder='imeprezime@email.com'
          {...register('email', {
            required: { value: true, message: '*obavezno polje' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: '*molimo Vas unesite validnu email adresu',
            },
          })}
          autoComplete='email'
          className={errors.email ? styles.error : ''}
        />
        <label htmlFor='email'>Vaša email adresa</label>
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.contactForm__fieldWrapper}>
        <textarea
          id='message'
          placeholder={'Poruka'}
          rows={5}
          {...register('message', {
            required: { value: true, message: '*obavezno polje' },
            minLength: {
              value: 10,
              message: '*minimalna dužina je 10 karaktera',
            },
            maxLength: {
              value: 1000,
              message: '*maksimalna dužina je 1000 karaktera',
            },
          })}
          className={errors.message ? styles.error : ''}
        />
        <label htmlFor='message'>Vaša poruka</label>
        {errors.message && (
          <p className={styles.errorMessage}>{errors.message.message}</p>
        )}
      </div>
      <div className={styles.contactForm__submitWrapper}>
        {message && isSuccess && (
          <p className={styles.successMessage}>
            Vaša poruka je uspešno poslata!
          </p>
        )}
        {message && !isSuccess && (
          <p className={styles.errorMessageMain}>
            Došlo je do greške prilikom slanja vaše poruke, molimo Vas pokušajte
            ponovo.
          </p>
        )}
        <Button type='submit'>Pošalji poruku</Button>
      </div>
    </form>
  );
};

export default ContactForm;
