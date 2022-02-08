import PostItem from 'components/PostItem';
import styles from './post-list.module.scss';
import { Post } from 'interfaces';

type PostListProps = {
  posts: Array<Post>;
  max?: number;
}

export default function PostList({ posts, max }: PostListProps) {
  if (posts === undefined) return null;

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul className={styles.post_list}>
        {posts &&
          posts.map((post, i) => {
            if (max && i > max - 1) return null;
            return <PostItem key={post.slug} item={post} />;
          })}
      </ul>
    </div>
  );
}
