/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { GetStaticProps } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Layout from 'components/Layout';
import headerColor from 'helpers/post-header';
import styles from 'styles/post.module.scss';
import ProgressiveImage from 'components/ProgressiveImage';
import isExternalImage from 'helpers/is-external-image';
import generateArticleStructuredData from 'helpers/generate-article-structured-data';
import generateFaqStructuredData from 'helpers/generate-faq-structured-data';
import parsePosts from 'helpers/parse-posts';
import { Post, StaticPropsContextParams, BlogPostProps } from 'interfaces';

export const BlogPost = ({
  siteTitle,
  frontmatter,
  markdownBody,
  date,
  slug,
  image
}: BlogPostProps) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!frontmatter) return <></>;

  return (
    <Layout
      socialMeta={{
        url: `blog/${slug}`,
        image,
        imageAlt: frontmatter.cover_image_alt,
        type: 'article',
        title: `${frontmatter.title} | ${siteTitle}`,
        description: frontmatter.description
      }}
      breadcrumbs={[
        { name: 'blog', item: 'blog/' },
        { name: frontmatter.title, item: `blog/${slug}` }
      ]}
      structured={[
        generateFaqStructuredData(frontmatter.faq),
        generateArticleStructuredData({
          title: frontmatter.title,
          slug,
          description: frontmatter.description,
          image,
          date
        })
      ]}
    >
      <article className={styles.post}>
        {frontmatter.cover_image ? (
          <ProgressiveImage
            className={styles.post__header__image}
            src={frontmatter.cover_image}
            alt={frontmatter.cover_image_alt}
          />
        ) : (
          <div
            className={styles.post__header__image}
            style={{ backgroundColor: headerColor }}
          />
        )}
        <div className='container'>
          <div className={styles.post__header__title}>
            <h2>{frontmatter.title}</h2>
            <div className={styles.post__date_label}>{date}</div>
          </div>
        </div>
        <div className={styles.post__body}>
          <div className='container'>
            <div className={styles.post__intro}>{frontmatter.intro}</div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // eslint-disable-next-line react/no-unstable-nested-components
                code({ inline, className, children }) {
                  const match = /language-(\w+)/.exec(className || '');

                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={materialOceanic}
                      language={match[1]}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className}>{children}</code>
                  );
                },
                img: ProgressiveImage
              }}
            >
              {markdownBody}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async context => {
  const { postname = '' } = context.params as StaticPropsContextParams;
  const content = await import(`../../posts/${postname}.md`);
  const config = await import('../../siteconfig.json');
  const date = `${postname}`.match(/(\d{1,4}([.\--])\d{1,2}([.\--])\d{1,4})/g);
  const data = matter(content.default);
  let image = data.data.cover_image || null;

  if (image && !isExternalImage(image)) {
    const src = require(`images/${data.data.cover_image}`);

    image = 'https://khendrikse.github.io'.concat(src.src);
  }

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      date,
      slug: postname,
      image
    }
  };
}

export async function getStaticPaths() {
  const allPosts = parsePosts(
    require.context('../../posts', true, /\.\/.*\.md$/)
  ).map((post: Post) => post.slug);

  const paths = allPosts.map((slug: string) => `/blog/${slug}`);

  return {
    paths,
    fallback: false
  };
}
