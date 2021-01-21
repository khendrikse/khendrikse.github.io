import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <a className={styles.footer__link} href='https://dev.to/khenhey'>
          <img src='/assets/images/devto.svg?' />
          dev.to
        </a>
        <a className={styles.footer__link} href='https://github.com/khendrikse'>
          <img src='/assets/images/github.svg?' />
          GitHub
        </a>
      </div>
      © 2021 Karin Hendrikse
    </div>
  );
}
