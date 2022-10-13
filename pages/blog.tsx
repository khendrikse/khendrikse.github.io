import { GetStaticProps } from 'next';
import BlogPage from 'components/BlogPage';
import parsePosts from 'helpers/parse-posts';
import getCategories from 'helpers/get-categories';
import { BlogProps } from 'interfaces';

const socialMeta = {
  image:
    'https://velvety-tartufo-f1de54.netlify.app/_next/static/chunks/images/portait-linoosk-db0fc2adaa55eb6080c20ff88376c1ba.png',
  imageAlt: 'Drawn avatar of khendrikse',
  description:
    'Blog about tinkering, programming and other tech related subjects.',
  url: 'blog'
};

const Index = (props: BlogProps) => (
  <BlogPage
    {...props}
    socialMeta={{ ...socialMeta, title: props.title }}
    breadcrumbs={[{ name: 'blog', item: `blog/${props.currentCategory}` }]}
  />
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  const posts = parsePosts(require.context('../posts', true, /\.\/.*\.md$/));

  const categories = getCategories(posts);

  return {
    props: {
      posts,
      categories,
      currentCategory: '',
      title: 'Blog | '.concat(configData.default.title)
    }
  };
};
