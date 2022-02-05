/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import PostList from 'components/PostList';

const BlogPage = ({
  posts,
  currentCategory,
  socialMeta,
  categories,
  breadcrumbs
}) => (
  <Layout socialMeta={socialMeta} breadcrumbs={breadcrumbs}>
    <div className='container'>
      <h2 className='section__title'>Blog</h2>
      <div className='categories'>
        {categories.map(category => (
          <Link
            key={category}
            href={category === currentCategory ? '/blog' : `/blog/${category}`}
          >
            <a className={category === currentCategory ? 'active' : ''}>
              {category}
            </a>
          </Link>
        ))}
      </div>
      <PostList posts={posts} />
    </div>
  </Layout>
);

BlogPage.propTypes = {
  posts: PropTypes.array,
  currentCategory: PropTypes.string,
  categories: PropTypes.array,
  socialMeta: PropTypes.object,
  breadcrumbs: PropTypes.array
};

export default BlogPage;
