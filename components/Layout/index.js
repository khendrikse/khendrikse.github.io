import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{pageTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik:wght@700" rel="stylesheet" />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css'
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
