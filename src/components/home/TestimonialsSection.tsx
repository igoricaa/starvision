import styles from './TestimonialsSection.module.scss';

const TestimonialsSection = () => {
  return <section className={styles.testimonialsSection}>
  </section>;
};

export default TestimonialsSection;

type TestimonialItemProps = {
  author: string;
  text: string;
};

const TestimonialItem = ({ author, text }: TestimonialItemProps) => {
  return (
    <article className={styles.testimonialItem}>
      <p className={styles.testimonialItemText}>{text}</p>
      <p className={styles.testimonialItemAuthor}>{author}</p>
    </article>
  );
};
