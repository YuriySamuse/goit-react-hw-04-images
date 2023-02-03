import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImgGallery } from 'components/ImageGallery/ImageGelery.styled';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className="gallery-item">
      <ImageGalleryItem
        webURL={webformatURL}
        tags={tags}
        largeImg={largeImageURL}
      />
    </li>
  ));

  return <ImgGallery>{elements}</ImgGallery>;
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
