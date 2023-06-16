import React from 'react';
import { useRouter } from 'next/router';
import PhotoCard from './PhotoCard';
import es from '../../translated/es';
import en from '../../translated/en';
import uno from '@icons/sect-1.jpeg';
import tres from '@icons/sect-2.jpeg';
import cuatro from '@icons/sect-3.jpeg';
import cinco from '@icons/sect-4.jpeg';

const Promo = () => {
  const { locale } = useRouter();
  const translated = locale === 'en' ? en : es;
  const images = [uno, tres, cuatro, cinco];

  return (
    <>
      <div className="place-items-left">
        <h3 className="lg:text-2xl sm:text-1xl mb-3 px-10">{translated.news.disfruta}</h3>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:gap-8 px-10 overflow-x-auto sm:overflow-x-auto md:overflow-hidden px-10">
          <div className="md:grid md:grid-cols-4 gap-4 h-82">
            {images.slice(0, 4).map((image, index) => (
              <PhotoCard key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
