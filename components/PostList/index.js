import Link from 'next/link';
import PostCard from 'components/PostCard';
import styles from 'styles/posts.module.scss';

export default function PostList({ posts, max }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className={styles.posts}>
        {posts &&
          posts.map((post, i) => {
            if (i > max - 1) return;
            return <PostCard key={post.slug} post={post} />;
          })}
      </ul>
    </div>
  );
}
