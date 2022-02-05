import PropTypes from 'prop-types';
import PostItem from 'components/PostItem';
import styles from './post-list.module.scss';

export default function PostList({ posts, max }) {
  if (posts === 'undefined') return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className={styles.post_list}>
        {posts &&
          posts.map((post, i) => {
            if (i > max - 1) return null;
            return <PostItem key={post.slug} item={post} />;
          })}
      </ul>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  max: PropTypes.number
};
