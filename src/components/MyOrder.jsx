import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import Image from 'next/image';

const MyOrder = () => {
  const { productToShow, isVisible, setIsVisible } = useContext(AppContext);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return false;
  }

  return (
    <aside className="MyOrder flex flex-col fixed left-0 border border-black bg-white rounded">
      <div className="flex justify-between items-center mx-5">
        <Image onClick={handleClose} src={close} alt="closed-detail-shop" />
        <p className="font-bold dark:text-black">Detalles de Compra</p>
      </div>
      <div className="flex">
        <p className="dark:text-black text-dark px-10 mb-5 mt-5">{productToShow.productToShow.title}</p>
        <p className="dark:text-black text-dark px-10 mb-5 mt-5">${productToShow.productToShow.price}</p>
      </div>
      <figure>
        <Image className="w-full h-full rounded px-5 mb-10" src={productToShow.productToShow.images} alt={productToShow.productToShow.title}></Image>
      </figure>
      <div>
        <p className="dark:text-black text-dark mt-5 px-10">{productToShow.productToShow.description}</p>
      </div>
    </aside>
  );
};

export default MyOrder;
