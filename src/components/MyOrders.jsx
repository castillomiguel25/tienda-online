import React, { useContext } from 'react';
import OrderCards from '@components/OrderCards';
import AppContext from '@context/AppContext';

const MyOrders = () => {
  const { order } = useContext(AppContext);

  console.log(order, 'funciono soy myOrder');

  return (
    <div className="flex flex-col w-80">
      <h1 className="px-10 mb-2 mt-3 ">MyOrders</h1>
      {order?.length > 0 && order.slice(-1)[0].products.map((product) => <OrderCards key={product.id} id={product.id} title={product.title} price={product.price} images={product.images} />)}
    </div>
  );
};

export default MyOrders;
