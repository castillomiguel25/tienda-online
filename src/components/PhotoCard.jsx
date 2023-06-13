import React from 'react';
import Image from 'next/image';

const PhotoCard = ({ image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-black">
      <Image src={image} alt="Photo" className="w-full h-full"></Image>
    </div>
  );
};

export default PhotoCard;
