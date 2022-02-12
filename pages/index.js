import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import styles from 'styles/home.module.scss';
import parsePosts from 'helpers/parse-posts';
import createFeeds from '../scripts/feed';

const socialMeta = {
  image:
    'https://khendrikse.github.io/_next/static/chunks/images/portait-linoosk-db0fc2adaa55eb6080c20ff88376c1ba.png',
  imageAlt: 'Drawn avatar of khendrikse'
};

const Index = ({ posts, title }) => (
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

Index.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string
};

export default Index;

export async function getStaticProps() {
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
}
