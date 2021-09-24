import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Online space, blog and portfolio' />
        <title>{pageTitle}</title>
        <script
          defer
          data-domain='khendrikse.github.io'
          src='https://plausible.io/js/plausible.js'
        />
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
  pageTitle: PropTypes.string
};
