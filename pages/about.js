import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import ProgressiveImage from 'components/ProgressiveImage';
import styles from 'styles/about.module.scss';

const socialMeta = {
  image:
    'https://khendrikse.github.io/_next/static/chunks/images/portait-linoosk-db0fc2adaa55eb6080c20ff88376c1ba.png',
  imageAlt: 'Drawn avatar of khendrikse',
  url: 'about'
};

const About = ({ title }) => (
  <Layout
    socialMeta={{ ...socialMeta, title }}
    breadcrumbs={[{ name: 'about', item: 'about/' }]}
  >
    <div className='container'>
      <h2 className='page__title'>About</h2>
      <div className={styles.about}>
        <figure className={styles.about__avatar}>
          <ProgressiveImage
            src='portait-linoosk.png'
            alt='a portrait of the author of the website'
          />
          <figcaption>
            Portrait by <a href='https://twitter.com/linoosik'>@linoosik</a>
          </figcaption>
        </figure>
        <p>
          <strong>
            I am a Full-Stack Developer from The Netherlands with a background
            in communication, photography and design. Eager to learn, I spend my
            workdays coding in JavaScript, Node.js, React, and of course HTML
            and CSS. During my free time I like to learn more, tinker on
            projects and enjoy myself with friends, creative projects, games and
            plants. 🌱.
          </strong>
        </p>
        <h3>Tech</h3>
        <p>
          I use JavaScript and ReactJS on a day-to-day basis. Lately I have been
          diving into the developer experience by learning more about Continuous
          Integration and Continuous Deployment. I really like finding ways to
          increase productivity while creating better quality code.
        </p>

        <h3>Community</h3>
        <p>
          RailsGirls was the start of my journey to becoming a software
          engineer. Experiencing that group of open-minded people has really
          motivated me to contribute to the developer community. This is why I
          try to be involved in helping out with RailsGirls NL and why I am a
          front-end guild leader at YoungCapital. It brings me great joy to help
          unite fellow developers.
        </p>
      </div>
    </div>
  </Layout>
);

About.propTypes = { title: PropTypes.string };

export default About;

export async function getStaticProps() {
  const configData = await import('../siteconfig.json');

  return {
    props: {
      title: configData.default.title
    }
  };
}
