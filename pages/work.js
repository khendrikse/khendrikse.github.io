import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import ProgressiveImage from 'components/ProgressiveImage';
import styles from 'styles/work.module.scss';

const About = ({ title }) => (
  <Layout pageTitle={title}>
    <div>
      <ProgressiveImage
        className={styles.work__header__image}
        src='oob-this.png'
      />
      <div className='container'>
        <div className={styles.work__header__title}>
          <h1>Oob this</h1>
          <p>
            One of my favorite podcasts 'delete this' inspired me to create a
            small website that replaces each vowel in a work with 'oob'. It was
            loads of fun to make and I totally geeked out when they mentioned it
            in their podcast.
          </p>
          <a href='https://oob-this.netlify.com/'>Visit oob-this -></a>
        </div>
      </div>
    </div>
    <div>
      <ProgressiveImage
        className={styles.work__header__image}
        src='whatgenre.png'
      />
      <div className='container'>
        <div className={styles.work__header__title}>
          <h1>Oob this</h1>
          <p>
            One of my favorite podcasts 'delete this' inspired me to create a
            small website that replaces each vowel in a work with 'oob'. It was
            loads of fun to make and I totally geeked out when they mentioned it
            in their podcast.
          </p>
          <a href='https://oob-this.netlify.com/'>Visit oob-this -></a>
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
