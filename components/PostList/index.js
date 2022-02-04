import PropTypes from 'prop-types';
import PostItem from 'components/PostItem';
import styles from './post-list.module.scss';

export default function PostList({ posts, max, filter }) {
  if (posts === 'undefined') return null;
  const filteredPosts = filter
    ? posts.filter(post => post.frontmatter?.tags?.includes(filter))
    : posts;
  return (
    <div>
      {!filteredPosts && <div>No posts!</div>}
      <ul className={styles.post_list}>
        {filteredPosts &&
          filteredPosts.map((post, i) => {
            if (i > max - 1) return null;
            return <PostItem key={post.slug} item={post} />;
          })}
      </ul>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
  max: PropTypes.number,
  filter: PropTypes.string
};
