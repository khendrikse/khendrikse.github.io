import PropTypes from 'prop-types';
import matter from 'gray-matter';
import Layout from 'components/Layout';
import PostList from 'components/PostList';

const Index = ({ posts, title }) => (
  <Layout pageTitle={title}>
    <div className='container'>
      <h2 className='section__title'>Blog</h2>
      <PostList posts={posts} />
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
