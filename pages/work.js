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
          <h1>Title</h1>
          <p>
            Sugar plum tart gummies pudding toffee pudding caramels. Wafer donut
            sugar plum chocolate bar lemon drops danish cheesecake. Chocolate
            cake donut marzipan pudding biscuit. Brownie cookie gummi bears
            muffin lollipop cotton candy cookie chupa chups jelly-o. Candy
            halvah lemon drops. Bear claw gingerbread oat cake wafer powder
            croissant muffin danish bonbon. Sweet caramels tart cake marzipan
            donut lemon drops. Donut croissant sugar plum icing danish fruitcake
            danish.{' '}
          </p>
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
