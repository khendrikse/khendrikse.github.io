import PropTypes from 'prop-types';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Layout from 'components/Layout';
import headerColor from 'helpers/post-header';
import styles from 'styles/post.module.scss';
import ProgressiveImage from 'components/ProgressiveImage';

const CodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
);

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string,
};
export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  date,
}) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
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
            <h1>{frontmatter.title}</h1>
            <div className={styles.post__date_label}>{date}</div>
          </div>
        </div>
        <div className={styles.post__body}>
          <div className='container'>
            <div className={styles.post__intro}>{frontmatter.intro}</div>
            <ReactMarkdown
              renderers={{ code: CodeBlock, image: ProgressiveImage }}
              source={markdownBody}
              escapeHtml={false}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
}

BlogPost.propTypes = {
  siteTitle: PropTypes.string,
  frontmatter: PropTypes.object,
  markdownBody: PropTypes.string,
  date: PropTypes.array,
};

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import('../../siteconfig.json');
  const date = postname.match(/(\d{1,4}([.\--])\d{1,2}([.\--])\d{1,4})/g);
  const data = matter(content.default);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      date,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = (context => {
    const keys = context.keys();
    const data = keys.map(key => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);

      return slug;
    });

    return data;
  })(require.context('../../posts', true, /\.\/.*\.md$/));

  const paths = blogSlugs.map(slug => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
