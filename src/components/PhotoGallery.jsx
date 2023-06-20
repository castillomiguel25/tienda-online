import React, { useState } from 'react';
import Image from 'next/image';

// imagenes para sandalias
import sect from '@icons/sect-1.jpeg';
import sec from '@icons/sect-4.jpeg';
import shop from '@icons/trinity.jpeg';
import uno from '@icons/new1.jpeg';
import tres from '@icons/new2.jpeg';
import dos from '@icons/new3.jpeg';
import cuatro from '@icons/new4.jpeg';
import cinco from '@icons/new5.jpeg';
import seis from '@icons/new6.jpeg';
import siete from '@icons/new7.jpeg';
import ocho from '@icons/new8.jpeg';
import nueve from '@icons/new9.jpeg';

import diez from '@icons/new10.jpeg';
import once from '@icons/new11.jpeg';
import doce from '@icons/new12.jpeg';
import trece from '@icons/new13.jpeg';
import catorce from '@icons/new14.jpeg';
import quince from '@icons/new15.jpeg';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const renderProductSection = (photos, title) => {
    return (
      <div className="px-10">
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

  return <div className="mb-10 sm:text-1xl">{renderProductSection([sect, sec, shop, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince])}</div>;
};

export default PhotoGallery;
