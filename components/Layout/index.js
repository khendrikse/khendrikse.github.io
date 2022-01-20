import PropTypes from 'prop-types';
import Head from 'next/head';
import generateBreadcrumbs from 'helpers/generate-breadcrumbs';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children, pageTitle, breadcrumbs = [] }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Online space, blog and portfolio' />
        <title>{pageTitle}</title>
        <script type='application/ld+json'>
          {generateBreadcrumbs(breadcrumbs)}
        </script>
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
  pageTitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, item: PropTypes.string })
  )
};
