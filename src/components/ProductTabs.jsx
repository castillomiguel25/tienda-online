import React, { useContext, useState } from 'react';
import ProductsCards from './ProductsCards';
import { Button } from 'flowbite-react';
import AppContext from '@context/AppContext';

const ProductTabs = () => {
  const { setSearchByCategory } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex, category) => {
    setActiveTab(tabIndex);
    setSearchByCategory(category);
  };

  const resetTabs = () => {
    setActiveTab(1);
    setSearchByCategory(null);
  };

  return (
    <div className="my-10 px-10">
      <div className="tab-list flex">
        <Button
          className={
            activeTab === 1
              ? 'active'
              : 'ml-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white'
          }
          onClick={resetTabs}
        >
          All
        </Button>
        <Button
          className={
            activeTab === 2
              ? 'active'
              : 'ml-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white'
          }
          onClick={() => handleTabClick(1, 'Shoes')}
        >
          Shoes
        </Button>
        <Button
          className={
            activeTab === 3
              ? 'active'
              : 'ml-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white'
          }
          onClick={() => handleTabClick(1, 'Electronics')}
        >
          Electronics
        </Button>
        <Button
          className={
            activeTab === 4
              ? 'active'
              : 'ml-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 dark:text-white'
          }
          onClick={() => handleTabClick(1, 'Furniture')}
        >
          Furniture
        </Button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <ProductsCards />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <ProductsCards />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <ProductsCards />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <ProductsCards />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
