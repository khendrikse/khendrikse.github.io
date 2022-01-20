import styles from './footer.module.scss';
import DevTo from '../../public/assets/images/devto.svg';
import GitHub from '../../public/assets/images/github.svg';
import LinkedIn from '../../public/assets/images/linkedin.svg';
import Rss from '../../public/assets/images/rss.svg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <a className={styles.footer__link} href='https://dev.to/khenhey'>
          <DevTo width='24px' height='24px' alt='DEV.to' />
        </a>
        <a className={styles.footer__link} href='https://github.com/khendrikse'>
          <GitHub width='24px' height='24px' alt='GitHub' />
        </a>
        <a
          className={styles.footer__link}
          href='https://www.linkedin.com/in/karinhendrikse/'
        >
          <LinkedIn width='24px' height='24px' alt='LinkedIn' />
        </a>
        <a
          className={styles.footer__link}
          href='https://khendrikse.github.io/feeds/feed.xml'
        >
          <Rss width='24px' height='24px' alt='RSS' />
        </a>
        © {new Date().getFullYear()} Karin Hendrikse
      </div>
    </div>
  );
}
