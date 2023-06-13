import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import Card from '@components/Cards';

const ProductsCards = () => {
  const { setSearchTitle, filteredItems } = useContext(AppContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.slice(10, 19).map((item) => <Card key={item.id} data={item} />);
    } else {
      return (
        <div>
          <h3 className="mb-10"> El producto no coincide...</h3>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center relative mb-4 ">
        <h1 className="text-black dark:text-white">Productos Exclusivos</h1>
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <input
          className="rounded-lg border border-black w-96  p-4 mb-4 focus:outline-none dark:text-black"
          type="text"
          placeholder="Buscar Producto"
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>
      <div className="lg:grid lg:grid-cols-3 place-items-center mt-5 w-full  px-10">{renderView()}</div>
    </div>
  );
};

export default ProductsCards;
