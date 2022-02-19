const isExternalImage = (src: string = '') => src.includes('http' || 'https');

export default isExternalImage;
