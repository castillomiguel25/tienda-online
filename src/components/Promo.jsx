import React from 'react';
import PhotoCard from './PhotoCard';
import uno from '@icons/sect-1.jpeg';
import tres from '@icons/sect-2.jpeg';
import cuatro from '@icons/sect-3.jpeg';
import cinco from '@icons/sect-4.jpeg';

const Promo = () => {
  const images = [uno, tres, cuatro, cinco];

  return (
    <>
      <div className="place-items-left">
        <h3 className="lg:text-2xl sm:text-1xl mb-3 px-10">Disfruta...</h3>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-8 px-10">
          <div className="hidden md:grid md:grid-cols-4 gap-4 h-82">
            {images.slice(0, 4).map((image, index) => (
              <PhotoCard key={index} image={image} />
            ))}
          </div>

          <div className="md:hidden">
            <PhotoCard image={images[4]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
