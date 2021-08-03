import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import ProgressiveImage from 'components/ProgressiveImage';
import styles from 'styles/work.module.scss';

const Work = ({ title, work = [] }) => (
  <Layout pageTitle={title}>
    <div className='container'>
      <h2 className='section__title'>Work</h2>
      <div className={styles.work__card__grid}>
        {work.map(({ project }) => (
          <div key={title} className={styles.work__card}>
            <ProgressiveImage
              className={styles.work__card__image}
              src={project.image}
            />
            <div className={styles.work__card__body}>
              <h1>{project.title}</h1>
              <ReactMarkdown source={project.content} escapeHtml={false} />
              <div className={styles.work__card__link}>
                <a href={project.link}>Check it out</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

Work.propTypes = { title: PropTypes.string, work: PropTypes.array };

export default Work;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const work = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys
      .map((key, index) => {
        const value = values[index];
        const document = matter(value.default);
        return {
          project: { ...document.data, content: document.content }
        };
      })
      .sort((a, b) => a.project.order - b.project.order);
    return data;
  })(require.context('../work', true, /\.md$/));

  return {
    props: {
      work,
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
