import type { AppProps } from 'next/app'
import 'normalize.css';
import '../styles/main.scss';
import '../styles/blog.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


export default MyApp;
