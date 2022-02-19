import { GetStaticProps } from 'next';
import Layout from 'components/Layout';
import matter from 'gray-matter';
import styles from 'styles/projects.module.scss';
import Project from 'components/Project';
import { Project as ProjectType, RequireContext } from '../interfaces';

type ProjectsProps = {
  title: string;
  projects: Array<ProjectType>;
};

const Projects = ({ title, projects = [] }: ProjectsProps) => (
  <Layout
    socialMeta={{ title }}
    breadcrumbs={[{ name: 'projects', item: 'projects/' }]}
  >
    <div className='container'>
      <h2 className='section__title'>Projects</h2>
      <div className={styles.projects__card__grid}>
        {projects.map(({ title, image, content, link }) => (
          <Project
            title={title}
            image={image}
            content={content}
            link={link}
            key={title}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;

type Value = {
  default: string;
  order: number;
};

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  const projects = ((context: RequireContext) => {
    const keys = context.keys();
    const values: Array<Value> = keys.map(context);
    console.log({ keys, values });
    const data = keys
      .map((key: string, index: number) => {
        const value: Value = values[index];
        const document = matter(value.default);
        return { ...document.data, content: document.content };
      })
      .sort((a: Value, b: Value) => a.order - b.order);
    return data;
  })(require.context('../projects', true, /\.\/.*\.md$/));

  return {
    props: {
      projects,
      title: configData.default.title,
      description: configData.default.description
    }
  };
};
