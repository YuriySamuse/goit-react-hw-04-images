import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'components/ImageGalleryItem/ImageGallertItem.styled';

const ImageGalleryItem = ({ webURL, tags, largeImg, onSelect }) => {
  return (
    <Image
      src={webURL}
      alt={tags}
      onClick={() => {
        onSelect(largeImg);
      }}
    />
  );
};

ImageGalleryItem.propTypes = {
  webURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
