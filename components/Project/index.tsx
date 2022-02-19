import ReactMarkdown from 'react-markdown';
import styles from '../../styles/projects.module.scss';
import ProgressiveImage from '../ProgressiveImage';
import { Project as ProjectType } from '../../interfaces';

export default function Project({ title, image, content, link }: ProjectType) {
  return (
    <div className={styles.projects__card}>
      <ProgressiveImage
        className={styles.projects__card__image}
        alt=''
        src={image}
      />
      <div className={styles.projects__card__body}>
        <h1>{title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        <div className={styles.projects__card__link}>
          <a href={link}>Check it out</a>
        </div>
      </div>
    </div>
  );
}
