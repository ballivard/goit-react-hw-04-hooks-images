import React from "react";
import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, handleLargeURLImage }) => {
  const handleClick = (e) => {
    console.log("gallery click");
  };
  const largeURLImage = (data) => {
    handleLargeURLImage(data);
  };
  return (
    <ul className="ImageGallery" id="imagesList">
      {images.map(({ id, webformatURL, largeImageURL, tags, user }) => (
        <GalleryItem
          onClick={handleClick}
          key={`${id}${user}`}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tag={tags}
          handleLargeURLImage={largeURLImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;