/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from './post-item.module.scss';
import { Post } from 'interfaces';

export default function PostItem({ item }: { item: Post }) {
  return (
    <li className={styles.post_item}>
      <div className={styles.post_item__label_wrapper}>
        <div className={styles.post_item__label}>
          {new Date(item.date).toDateString()}
        </div>
        <h2 className={styles.post_item__title}>
          <Link href={`/blog/${item.slug}`}>
            <a className={styles.post_item__title__link}>{item.title}</a>
          </Link>
        </h2>
      </div>
      <div className={styles.post_item__content}>
        {item.intro || item.description}
      </div>
    </li>
  );
}
