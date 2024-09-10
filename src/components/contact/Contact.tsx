'use client';

import { useContactDialog } from '../context/ContactDialogProvider';
import Logo from '../ui/Logo';
import styles from './Contact.module.scss';
import { ContactItem } from '@/data';

const Contact = () => {
  const { isOpen, closeDialog } = useContactDialog();

  return (
    <dialog
      open={isOpen}
      className={[styles.contact, isOpen ? styles.open : ''].join(' ')}
    >
      <div className={styles.contact__info}>
        <div className={styles.contact__info__helperWrapper}>
          <h2 className={styles.contact__info__title}>Kontaktirajte Nas</h2>
          <p className={styles.contact__info__description}>
            U formularu napisite vasu poruku/upit i odgovoricemo u najkracem
            mogucem roku
          </p>
        </div>
        <div className={styles.contact__info__contactItems}>
          {[
            {
              href: 'tel:0038111123456789',
              text: '+381 11 1234 567 89',
              className: 'phone',
            },
            {
              href: 'mailto:office@starvision.rs',
              text: 'office@starvision.rs',
              className: 'email',
            },
            {
              href: 'maps.google.com',
              text: 'Ulica broj, Beograd, Srbija',
              className: 'location',
              target: '_blank',
              rel: 'noreferrer',
            },
          ].map(({ href, text, className, ...props }: ContactItem) => (
            <a
              key={href}
              href={href}
              className={styles[`contact__info__contactItems__${className}`]}
              {...props}
            >
              {text}
            </a>
          ))}

          <div className={styles.contact__info__contactItems__socials}>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer'
              className={styles.contact__info__contactItems__socials__instagram}
            ></a>
          </div>
        </div>
        <Logo />
      </div>
      <div className={styles.contact__form}>
        <form></form>
      </div>
      <button className={styles.contact__closeButton} onClick={closeDialog}>
        <div className={styles.contact__closeButton__line}></div>
        <div className={styles.contact__closeButton__line}></div>
      </button>
    </dialog>
  );
};

export default Contact;
