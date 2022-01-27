import PropTypes from 'prop-types';
import Head from 'next/head';
import generateBreadcrumbs from 'helpers/generate-breadcrumbs';
import generateSocialMeta from 'helpers/generate-social-meta';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({
  children,
  breadcrumbs,
  socialMeta,
  structured
}) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {structured &&
          structured.filter(Boolean).map((content, i) => (
            <script key={`ldjson-${i}`} type='application/ld+json'>
              {content}
            </script>
          ))}
        <script type='application/ld+json'>
          {generateBreadcrumbs(breadcrumbs)}
        </script>

        {generateSocialMeta(socialMeta)}
      </Head>
      <div className='wrapper'>
        <section className='layout'>
          <Navbar />
          <div className='content'>{children}</div>
        </section>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, item: PropTypes.string })
  ),
  socialMeta: PropTypes.shape({
    twitterCardType: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string
  }),
  structured: PropTypes.array
};
