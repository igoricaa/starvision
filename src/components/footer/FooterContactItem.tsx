'use client';

import { useContactDialog } from '@/components/context/ContactDialogProvider';
import styles from './Footer.module.scss';

const FooterContactItem = () => {
  const { openDialog } = useContactDialog();
  return (
    <li className={styles.footer__menu__column__item} onClick={openDialog}>
      <span>Kontakt</span>
    </li>
  );
};

export default FooterContactItem;
