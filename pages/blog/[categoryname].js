import PropTypes from 'prop-types';
import matter from 'gray-matter';
import BlogPage from 'components/BlogPage';
import parsePosts from 'helpers/parse-posts';
import getCategories from 'helpers/get-categories';

const socialMeta = {
  image:
    'https://khendrikse.github.io/_next/static/chunks/images/portait-linoosk-db0fc2adaa55eb6080c20ff88376c1ba.png',
  imageAlt: 'Drawn avatar of khendrikse'
};

const Index = props => (
  <BlogPage
    {...props}
    socialMeta={{
      ...socialMeta,
      url: `blog/${props.currentCategory}`,
      description: `Blog about ${props.currentCategory}`,
      title: props.title
    }}
    breadcrumbs={[{ name: 'blog', item: `blog/${props.currentCategory}` }]}
  />
);

Index.propTypes = {
  title: PropTypes.string,
  currentCategory: PropTypes.string
};

export default Index;

export async function getStaticProps({ ...ctx }) {
  const { categoryname } = ctx.params;
  const allPosts = parsePosts(
    require.context('../../posts', true, /\.\/.*\.md$/)
  );

  const categories = getCategories(allPosts);
  const posts = allPosts.filter(post => post?.tags?.includes(categoryname));

  const config = await import('../../siteconfig.json');

  return {
    props: {
      title: 'Blog - '.concat(categoryname, ' | ', config.title),
      categories,
      posts,
      currentCategory: categoryname
    }
  };
}

export async function getStaticPaths() {
  const posts = await (async context => {
    const keys = context.keys();
    const data = keys
      .map(key => key.replace(/^.*[\\/]/, '').slice(0, -3))
      .map(key => import(`../../posts/${key}.md`));

    const allPosts = await Promise.all(data);
    return allPosts.map(post => matter(post.default).data);
  })(require.context('../../posts', true, /\.\/.*\.md$/));
  const categorySlugs = getCategories(posts);

  const paths = categorySlugs.map(slug => `/blog/${slug}`);

  return {
    paths,
    fallback: false
  };
}
