import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ crumbs }) => {
  const lastCrumb = crumbs.pop();

  return (
    <div className={styles.breadcrumbs}>
      <span>
        <Link href='/'>Home</Link>
      </span>
      {crumbs.map((crumb, i) => (
        <span key={`${crumb.name}-${i}`}>
          <Link href={crumb.href}>{crumb.name}</Link>
        </span>
      ))}
      <span>{lastCrumb.name}</span>
    </div>
  );
};

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({ href: PropTypes.string, name: PropTypes.string })
  )
};

export default Breadcrumbs;
