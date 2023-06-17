import React from 'react';
import PhotoCard from './PhotoCard';
import uno from '@icons/img1.webp';
import tres from '@icons/img2.webp';
import cuatro from '@icons/img-3.webp';
import cinco from '@icons/img-4.webp';
import seis from '@icons/new1.jpeg';
import siete from '@icons/new2.jpeg';
import ocho from '@icons/new3.jpeg';
import dos from '@icons/new4.jpeg';
import nueve from '@icons/new5.jpeg';

const PhotoGallery = () => {
  const images = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve];

  return (
    <div className="grid grid-cols-1 px-10 mb-10">
      <div className="md:grid md:grid-cols-4 h-72 overflow-x-auto">
        {images.slice(0, 8).map((image, index) => (
          <PhotoCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
