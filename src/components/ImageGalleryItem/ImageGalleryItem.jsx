import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webURL, tags, largeImg }) => {
  return <img src={webURL} alt={tags} data-source={largeImg} />;
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
