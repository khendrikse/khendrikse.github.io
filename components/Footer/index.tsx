import { BsGithub, BsLinkedin, BsFillRssFill, BsTwitter } from 'react-icons/bs';
import { SiDevdotto } from 'react-icons/si';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <a
          className={styles.footer__link}
          aria-label='GitHub'
          href='https://github.com/khendrikse'
        >
          <BsGithub size='24px' title='GitHub' />
        </a>
        <a
          className={styles.footer__link}
          aria-label='linkedin'
          href='https://www.linkedin.com/in/karinhendrikse/'
        >
          <BsLinkedin size='24px' title='LinkedIn' />
        </a>
        <a
          className={styles.footer__link}
          aria-label='Twitter'
          href='https://twitter.com/k_henhey'
        >
          <BsTwitter size='24px' title='Twitter' />
        </a>
        <a
          className={styles.footer__link}
          aria-label='DEV.to'
          href='https://dev.to/khenhey'
        >
          <SiDevdotto size='24px' title='DEV.to' />
        </a>
        <a
          className={styles.footer__link}
          aria-label='RSS feed'
          href='https://khendrikse.github.io/feeds/feed.xml'
        >
          <BsFillRssFill size='24px' title='RSS' />
        </a>
        © {new Date().getFullYear()} Karin Hendrikse
      </div>
    </div>
  );
}
