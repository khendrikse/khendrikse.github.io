/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from 'styles/posts.module.scss';

export default function PostCard({ post }) {
  return (
    <li className={styles.posts__card}>
      <div className={styles.posts__label_wrapper}>
        <div className={styles.posts__label}>
          {new Date(post.date).toDateString()}
        </div>
        <h2 className={styles.posts__title}>
          <Link href={`/post/${post.slug}`}>
            <a className={styles.posts__title__link}>
              {post.frontmatter.title}
            </a>
          </Link>
        </h2>
      </div>
      <div className={styles.posts__content}>{post.frontmatter.intro}</div>
      <p className={styles.posts__read_button}>{'Read post >'}</p>
    </li>
  );
}

PostCard.propTypes = {
  post: PropTypes.object
};
