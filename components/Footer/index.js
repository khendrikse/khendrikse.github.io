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
            alt='DEV.to'
          />
        </a>
        <a className={styles.footer__link} href='https://github.com/khendrikse'>
          <img
            width='24px'
            height='24px'
            src='/assets/images/github.svg?'
            alt='GitHub'
          />
        </a>
        <a
          className={styles.footer__link}
          href='https://www.linkedin.com/in/karinhendrikse/'
        >
          <img
            width='24px'
            height='24px'
            src='/assets/images/linkedin.svg'
            alt='LinkedIn'
          />
        </a>
        <a
          className={styles.footer__link}
          href='https://khendrikse.github.io/feeds/feed.xml'
        >
          <img
            width='24px'
            height='24px'
            src='/assets/images/rss.svg'
            alt='RSS'
          />
        </a>
        © {new Date().getFullYear()} Karin Hendrikse
      </div>
    </div>
  );
}
