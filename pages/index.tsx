import { GetStaticProps } from 'next';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import parsePosts from 'helpers/parse-posts';
import createFeeds from '../scripts/feed';
import styles from 'styles/home.module.scss';
import { Post } from 'interfaces';

const socialMeta = {
  image:
    'https://khendrikse.github.io/_next/static/chunks/images/portait-linoosk-db0fc2adaa55eb6080c20ff88376c1ba.png',
  imageAlt: 'Drawn avatar of khendrikse'
};

type IndexProps = {
  posts: Array<Post>;
  title: string;
};

const Index = ({ posts, title }: IndexProps) => (
  <Layout socialMeta={{ ...socialMeta, title }}>
    <div className='container'>
      <div className={styles.home__intro}>
        I am a Full-Stack Developer from The Netherlands with a background in
        communication, photography and design. Eager to learn, I spend my
        workdays coding in JavaScript, Node.js, React, and of course HTML and
        CSS. During my free time I like to learn more, tinker on projects and
        enjoy myself with friends, creative projects, games and plants.
      </div>
      <hr />
      <h2 className='section__title'>Latest posts</h2>
      <PostList posts={posts} max={3} />
    </div>
  </Layout>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  if (process.env.NODE_ENV !== 'development') {
    createFeeds();
  }

  const posts = parsePosts(require.context('../posts', true, /\.\/.*\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description
    }
  };
};
