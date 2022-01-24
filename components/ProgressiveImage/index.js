/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isExternalImage from 'helpers/is-external-image';

const ProgressiveImage = props => {
  const isExternal = isExternalImage(props.src);

  const [currentImage, setCurrentImage] = useState(
    isExternal ? `${props.src}?lqip` : require(`images/${props.src}?lqip`)
  );

  const [loading, setLoading] = useState(props.src);

  const fetchImage = src => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setCurrentImage(image.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(isExternal ? props.src : require(`images/${props.src}`));
  }, []);

  const style = () => ({
    transition: '0.2s filter linear',
    filter: `${loading ? 'blur(20px)' : ''}`
  });

  return (
    <img
      {...props}
      style={{ ...props.style, ...style() }}
      src={currentImage}
      alt={props.alt}
    />
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object
};

export default ProgressiveImage;
