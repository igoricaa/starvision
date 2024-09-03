import styles from './Button.module.scss';

type ButtonProps = {
  link: string;
  variant?: 'transparent' | 'primary';
  children: React.ReactNode;
};

const Button = ({ link, variant = 'primary', children }: ButtonProps) => {
  return (
    <a href={link} className={[styles.button, styles[variant]].join(' ')}>
      {children}
    </a>
  );
};

export default Button;
