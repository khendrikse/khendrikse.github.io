/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import { BlogProps } from 'interfaces';

const BlogPage = ({
  posts,
  currentCategory,
  socialMeta,
  categories,
  breadcrumbs
}: BlogProps) => (
  <Layout socialMeta={socialMeta} breadcrumbs={breadcrumbs}>
    <div className='container'>
      <h2 className='section__title'>Blog</h2>
      <div className='categories'>
        {categories.map(category => (
          <Link
            key={category}
            href={
              category === currentCategory
                ? '/blog'
                : `/blog/category/${category}`
            }
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

export default BlogPage;
