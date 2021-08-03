import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import ProgressiveImage from 'components/ProgressiveImage';
import styles from 'styles/projects.module.scss';

const Projects = ({ title, projects = [] }) => (
  <Layout pageTitle={title}>
    <div className='container'>
      <h2 className='section__title'>Projects</h2>
      <div className={styles.projects__card__grid}>
        {projects.map(({ project }) => (
          <div key={title} className={styles.projects__card}>
            <ProgressiveImage
              className={styles.projects__card__image}
              src={project.image}
            />
            <div className={styles.projects__card__body}>
              <h1>{project.title}</h1>
              <ReactMarkdown source={project.content} escapeHtml={false} />
              <div className={styles.projects__card__link}>
                <a href={project.link}>Check it out</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

Projects.propTypes = { title: PropTypes.string, projects: PropTypes.array };

export default Projects;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  const projects = (context => {
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
  })(require.context('../projects', true, /\.md$/));

  return {
    props: {
      projects,
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
