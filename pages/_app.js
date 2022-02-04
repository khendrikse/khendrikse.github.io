import PropTypes from 'prop-types';
import 'normalize.css';
import '../styles/main.scss';
import '../styles/blog.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default MyApp;
