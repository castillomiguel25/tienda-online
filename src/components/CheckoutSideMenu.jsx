import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import OrderCards from './OrderCards';
import { totalPrice } from '../utils/index';
import Modal from './MyOrderModal';
import MyOrders from './MyOrders';

const CheckoutSide = () => {
  const { productCart, setProductCart, isVisibleCheck, setIsVisibleCheck, setCount, count, order, setOrder, isOpen, setIsOpen } = useContext(AppContext);

  const handleCloseCheck = () => {
    setIsVisibleCheck(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isVisibleCheck) {
    return false;
  }

  const handleDelete = (id) => {
    const filteredProducts = productCart.filter((product) => product.id != id);
    setProductCart(filteredProducts);
    setCount(count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '21.05.1997',
      products: productCart,
      totalProducts: productCart.lenght,
      totalPrice: totalPrice(productCart),
    };
    setOrder([...order, orderToAdd]);
    setProductCart([]);
    setCount(0);
    setIsOpen(true);
  };
  console.log(order);

  return (
    <aside className="MyOrder flex flex-col fixed right-0 border border-black bg-white rounded overflow-x-hidden overflow-y-auto">
      <div className="flex justify-between items-center mx-5">
        <Image onClick={handleCloseCheck} src={close} alt="closed my order" />
        <p className="font-bold dark:text-black">My order</p>
      </div>
      <div className="px-6 flex-1">
        {productCart.map((product) => (
          <OrderCards key={product.id} id={product.id} title={product.title} price={product.price} images={product.images} handleDelete={handleDelete} />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="text-black dark:text-black">Total:</span>
          <span className="text-black dark:text-black text-2xl">${totalPrice(productCart)}</span>
        </p>
        <button onClick={() => handleCheckout()} className="bg-black dark:bg-black py-3 text-white dark:text-white rounded-lg w-full">
          Checkout
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <MyOrders />
      </Modal>
    </aside>
  );
};

export default CheckoutSide;
