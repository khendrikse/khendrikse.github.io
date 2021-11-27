import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <a className={styles.footer__link} href='https://dev.to/khenhey'>
          <img
            width='24px'
            height='24px'
            src='/assets/images/devto.svg?'
            alt='DEV.to icon'
          />
          dev.to
        </a>
        <a className={styles.footer__link} href='https://github.com/khendrikse'>
          <img
            width='24px'
            height='24px'
            src='/assets/images/github.svg?'
            alt='GitHub icon'
          />
          GitHub
        </a>
        <a className={styles.footer__link} href='https://www.linkedin.com/in/karinhendrikse/'>
          <img width='24px' height='24px' src='/assets/images/linkedin.svg' alt='LinkedIn icon' />
          LinkedIn
        </a>
      </div>
      © 2021 Karin Hendrikse
    </div>
  );
}
