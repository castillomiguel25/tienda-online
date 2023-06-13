import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import MyOrder from '@components/MyOrder';
import { useDarkModeLogic } from '../hooks/logic';
import CheckoutSide from '@components/checkoutSideMenu';
import Image from 'next/image';

const Card = ({ data }) => {
  const { toggleOrders, setToggleOrders, checkoutOrders, setcheckoutOrders } = useDarkModeLogic();
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { setProductToShow, setProductCart, productCart, setCount, count, setIsVisible, setIsVisibleCheck } = useContext(AppContext);

  if (!data) {
    return null;
  }
  const { category, images, title, price, id } = data;

  if (!category || !images || !title || !price || !id) {
    return null;
  }
  console.log(isButtonHovered);
  const ProductsShow = (products) => {
    setToggleOrders(!toggleOrders);
    setProductToShow({ productToShow: products });
    setIsVisible(true);
  };

  const addProductsToCart = (event, product) => {
    event.stopPropagation();
    setCount(count + 1);
    setProductCart([...productCart, product]);
    setcheckoutOrders(!checkoutOrders);
    setIsVisibleCheck(true);
  };

  const renderIcon = (id) => {
    const isInCart = productCart.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return <div className="px-3 mb-3 py-1 text-sm font-semibold text-white bg-black dark:bg-black dark:text-white">Agregado</div>;
    } else {
      return (
        <button
          onClick={(event) => addProductsToCart(event, data)}
          className="px-3 mb-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white"
          tabIndex={0}
        >
          Comprar
        </button>
      );
    }
  };

  return (
    <div>
      {toggleOrders && <MyOrder />}
      {checkoutOrders && <CheckoutSide />}

      <div
        className={`row ${isHovered ? 'hovered' : ''}`}
        onClick={() => ProductsShow(data)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            ProductsShow(data);
          }
        }}
      >
        <div className="w-96 ml-5 mr-5 mb-10">
          <div className="bg-white cursor-pointer mb-4 mx-auto rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform-gpu hover:scale-110 hover:bg-gray-200 ${isHovered ? 'z-50' : 'z-10'}">
            <figure className="relative">
              <span
                className="absolute top-0 left-0 bg-indigo-500 text-white rounded-tl-lg px-3 py-1 text-xs
                dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600
              "
              >
                {category.name}
              </span>
              <Image className={`w-full h-auto object-cover  ${isHovered ? 'z-40' : 'z-10'}`} src={images} alt={title}></Image>
              {isHovered && (
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-sm 
                  bg-indigo-500 rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  tabIndex={0}
                >
                  Ver más
                </button>
              )}
            </figure>
            <div className="p-3">
              <h3 className="text-lg font-semibold mb-2 dark:text-black">{title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 mr-2">${price}</span>
                {renderIcon(data.id)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
