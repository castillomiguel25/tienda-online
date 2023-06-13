import React from 'react';
import close from '@icons/icon_close.png';
import Image from 'next/image';

const OrderCards = (props) => {
  const { id, title, images, price, handleDelete } = props;

  console.log(images);

  let imageDelete;
  if (handleDelete) {
    imageDelete = <Image onClick={() => handleDelete(id)} className="h-3 w-3" src={close} alt="closed-order-card" />;
  }

  return (
    <div className="flex justify-between items-center mb-3 px-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <Image className="w-full h-full rounded-lg object-cover" src={images} alt={title}></Image>
        </figure>
        <p className="text-sm text-black dark:text-black font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg text-black dark:text-black font-medium">${price}</p>
        {imageDelete}
      </div>
    </div>
  );
};

export default OrderCards;
