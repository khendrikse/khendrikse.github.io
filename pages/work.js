import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import ProgressiveImage from 'components/ProgressiveImage';
import styles from 'styles/work.module.scss';

const About = ({ title }) => (
  <Layout pageTitle={title}>
    <div className='container'>
      <h2 className='section__title'>Work</h2>
      <div className={styles.work__card__grid}>
        <div className={styles.work__card}>
          <ProgressiveImage
            className={styles.work__card__image}
            src='oob-this.png'
          />
          <div className={styles.work__card__body}>
            <h1>Oob this</h1>
            <p>
              One of my favorite podcasts 'delete this' inspired me to create a
              small website that replaces each vowel in a work with 'oob'. It
              was loads of fun to make and I totally geeked out when they
              mentioned it in their podcast.
            </p>
            <div className={styles.work__card__link}>
              <a href='https://oob-this.netlify.com/'>Check it out</a>
            </div>
          </div>
        </div>
        <div className={styles.work__card}>
          <ProgressiveImage
            className={styles.work__card__image}
            src='whatgenre.png'
          />
          <div className={styles.work__card__body}>
            <h1>What Genre</h1>
            <p>
              When I first started coding I noticed the importance of building
              your own projects that you can feel passionate about. What Genre
              was one of the first projects I did. Using Spotify's API it checks
              what genre a given artist has.
            </p>
            <div className={styles.work__card__link}>
              <a href='https://whatgenre.herokuapp.com/'>Check it out</a>
            </div>
          </div>
        </div>
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
