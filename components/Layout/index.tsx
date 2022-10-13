import Head from 'next/head';
import generateBreadcrumbs from 'helpers/generate-breadcrumbs';
import generateSocialMeta from 'helpers/generate-social-meta';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Breadcrumb, SocialMeta } from 'interfaces';

type LayoutProps = {
  breadcrumbs?: Array<Breadcrumb>;
  socialMeta?: SocialMeta;
  canonical?: string;
  refreshUrl?: string;
  structured?: Array<string | null>;
  children?: React.ReactNode;
};

export default function Layout({
  children,
  breadcrumbs,
  socialMeta,
  structured,
  canonical,
  refreshUrl
}: LayoutProps) {
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
        {refreshUrl && (
          <meta
            httpEquiv='refresh'
            content={`2;url=https://velvety-tartufo-f1de54.netlify.app/${refreshUrl}`}
          />
        )}
        {canonical && (
          <link
            rel='canonical'
            href={`https://velvety-tartufo-f1de54.netlify.app/${canonical}`}
          />
        )}
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
