import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/projects.module.scss';
import ProgressiveImage from '../ProgressiveImage';

export default function Project({ title, image, content, link }) {
  return (
    <div className={styles.projects__card}>
      <ProgressiveImage className={styles.projects__card__image} src={image} />
      <div className={styles.projects__card__body}>
        <h1>{title}</h1>
        <ReactMarkdown source={content} escapeHtml={false} />
        <div className={styles.projects__card__link}>
          <a href={link}>Check it out</a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.array,
  link: PropTypes.string
};
