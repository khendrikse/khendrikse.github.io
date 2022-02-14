import React, { useState, useEffect } from 'react';
import isExternalImage from 'helpers/is-external-image';

const ProgressiveImage = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  const isExternal = isExternalImage(props.src);

  const [currentImage, setCurrentImage] = useState(
    isExternal ? `${props.src}?lqip` : require(`images/${props.src}?lqip`)
  );

  const [loading, setLoading] = useState(true);

  const fetchImage = (src: string) => {
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
      style={{ ...props.style, ...style() }}
      src={currentImage}
      alt={props.alt}
    />
  );
};

export default ProgressiveImage;
