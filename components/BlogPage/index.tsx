/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Layout from 'components/Layout';
import PostList from 'components/PostList';
import { Breadcrumb, Post } from 'interfaces';

type BlogPageProps = {
  posts: Array<Post>;
  currentCategory: string;
  socialMeta: object;
  categories: Array<string>;
  breadcrumbs: Array<Breadcrumb>;
};

const BlogPage = ({
  posts,
  currentCategory,
  socialMeta,
  categories,
  breadcrumbs
}: BlogPageProps) => (
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
