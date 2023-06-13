import React, { useState } from 'react';
import Image from 'next/image';

import uno from '@icons/otra1.jpeg';
import tres from '@icons/otra2.jpeg';
import dos from '@icons/otra1.jpeg';
import cuatro from '@icons/otra2.jpeg';
import cinco from '@icons/otra1.jpeg';
import seis from '@icons/otra2.jpeg';
import siete from '@icons/otra1.jpeg';
import ocho from '@icons/otra2.jpeg';

const Informative = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [uno, dos, tres, cuatro, cinco, seis, siete, ocho];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div>
        <div className="bg-slate-200 text-left mt-10 dark:bg-slate-200 h-48">
          <p className="mt-3 px-10 text-white">hola</p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap -mx-2 mt-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-1/4 px-2"
              onClick={() => handlePhotoClick(photo)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handlePhotoClick(photo);
                }
              }}
              role="button"
              tabIndex="0"
            >
              <Image src={photo} alt={`Foto ${index + 1}`} className="object-cover px-10 h-96 w-full cursor-pointer"></Image>
            </div>
          ))}

          {selectedPhoto && (
            <div
              className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleCloseModal}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  handleCloseModal();
                }
              }}
              role="button"
              tabIndex="0"
            >
              <Image className="max-h-full max-w-full" src={selectedPhoto} alt="Image-page-init"></Image>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Informative;
