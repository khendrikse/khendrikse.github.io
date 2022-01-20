import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import styles from 'styles/projects.module.scss';
import Project from 'components/Project';

const Projects = ({ title, projects = [] }) => (
  <Layout pageTitle={title} breadcrumbs={[{ name: 'projects', item: 'projects/' }]}>
    <div className='container'>
      <h2 className='section__title'>Projects</h2>
      <div className={styles.projects__card__grid}>
        {projects.map(({ project }) => (
          <Project key={project.title} {...project} />
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
  })(require.context('../projects', true, /\.\/.*\.md$/));

  return {
    props: {
      projects,
      title: configData.default.title,
      description: configData.default.description
    }
  };
}
