import React from 'react';
import PropTypes from 'prop-types';

import { ImgItemStyle } from 'components/ImageGalleryItem/ImageGallertItem.styled';

const ImageGalleryItem = ({ webURL, tags, largeImg }) => {
  return <ImgItemStyle src={webURL} alt={tags} data-source={largeImg} />;
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
