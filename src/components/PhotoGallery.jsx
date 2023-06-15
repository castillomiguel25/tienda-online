import React from 'react';
import PhotoCard from './PhotoCard';
import uno from '@icons/img1.webp';
import tres from '@icons/img2.webp';
import cuatro from '@icons/img-3.webp';
import cinco from '@icons/img-4.webp';

const PhotoGallery = () => {
  const images = [uno, tres, cuatro, cinco];

  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 px-10 overflow-x-auto sm:overflow-x-auto md:overflow-hidden mb-10">
      <div className="md:grid md:grid-cols-4 h-72">
        {images.slice(0, 4).map((image, index) => (
          <PhotoCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
