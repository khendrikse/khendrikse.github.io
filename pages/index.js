import PropTypes from 'prop-types';
import matter from 'gray-matter';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import styles from 'styles/home.module.scss';

const Index = ({ posts, title }) => (
  <Layout pageTitle={title}>
    <div className='container'>
      <div className={styles.home__intro}>
        I am a Front-End Developer from The Netherlands with a background in
        communication, photography and design. I spend my workdays happily
        coding at
        <a href='http://www.youngcapital.nl'>YoungCapital</a>. During my free
        time I like to learn more, tinker on projects and enjoy myself with
        friends, games and plants.
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

  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys
      .map((key, index) => {
        const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
        const date = slug.match(/(\d{1,4}([.\--])\d{1,2}([.\--])\d{1,4})/g);
        const value = values[index];
        const document = matter(value.default);
        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
          date
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
