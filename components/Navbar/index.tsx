/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { BsFillRssFill } from 'react-icons/bs';
import styles from './navbar.module.scss';

// TODO: current page styling for links

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar__inner}>
          <h1 className={styles.navbar__title}>
            <Link href='/'>
              <a>Karin Hendrikse</a>
            </Link>
          </h1>
          <ul className={styles.navbar__menu}>
            <li>
              <Link href='/about'>
                <a className={styles.navbar__menu__item}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/blog'>
                <a className={styles.navbar__menu__item}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <a className={styles.navbar__menu__item}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className={styles.navbar__menu__item}>Home</a>
              </Link>
            </li>
            <li>
              <a
                className={styles.navbar__menu__icon}
                aria-label='RSS feed'
                href='https://velvety-tartufo-f1de54.netlify.app/feeds/feed.xml'
              >
                <BsFillRssFill size='14px' title='RSS' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
