import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

// imagenes para sandalias
import uno from '@icons/san1.webp';
import tres from '@icons/san2.webp';
import dos from '@icons/1.jpeg';
import cuatro from '@icons/2.jpeg';
import cinco from '@icons/3.jpeg';
import seis from '@icons/4.jpeg';
import siete from '@icons/5.jpeg';
import ocho from '@icons/6.jpeg';
import nueve from '@icons/7.jpeg';

// imagenes para camizas
import camiza1 from '@icons/camiza1.webp';
import camiza2 from '@icons/camiza2.jpg';
import camiza3 from '@icons/camiza3.jpg';
import camiza4 from '@icons/camiza4.webp';
import camiza5 from '@icons/camiza5.jpg';

// imagenes para ropa
import mujer1 from '@icons/mujer1.webp';
import mujer2 from '@icons/mujer2.webp';
import mujer3 from '@icons/mujer3.jpg';
import mujer4 from '@icons/mujer4.webp';
import mujer5 from '@icons/mujer5.webp';

const Informative = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const renderProductSection = (photos, title) => {
    return (
      <div>
        <div className="text-left">
          <p className="mt-10 px-10  dark:bg-slate-300 bg-slate-200 text-black dark:text-black text-3xl">{title}</p>
        </div>
        <div className="mt-10">
          <div className="flex items-center">
            <div className="flex overflow-x-auto mx-2">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`flex-none w-1/${photos.length} px-2`}
                  onClick={() => handlePhotoClick(photo)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handlePhotoClick(photo);
                    }
                  }}
                  role="button"
                  tabIndex="0"
                >
                  <Image src={photo} alt={`Foto ${index + 1}`} className="object-cover h-96 w-full cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

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
              <Image className="max-h-full max-w-full" src={selectedPhoto} alt="Image-page-init" />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-10 sm:text-1xl">
      {renderProductSection([uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve], 'Sandalias')}
      {renderProductSection([camiza1, camiza2, camiza3, camiza4, camiza5], 'Ropa para Caballeros')}
      {renderProductSection([mujer1, mujer2, mujer3, mujer4, mujer5], 'Ropa para Damas')}
    </div>
  );
};

export default Informative;
