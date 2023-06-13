import { useState, useEffect } from 'react';

const filteredByTitle = (items, searchTitle) => {
  return items?.filter((item) => item.title.toLowerCase().includes(searchTitle.toLowerCase()));
};

const filteredItemsByCategory = (items, searchByCategory) => {
  return items?.filter((item) => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
};

const filterBy = (searchType, items, searchTitle, searchByCategory) => {
  if (searchType === 'BY_TITLE') {
    return filteredByTitle(items, searchTitle);
  }
  if (searchType === 'BY_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory);
  }
  if (!searchType) {
    return items;
  }
  if (searchType === 'BY_TITLE_AND_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory).filter((item) => item.title.toLowerCase().includes(searchTitle.toLowerCase()));
  }
};

const useInitialState = () => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

  // logica del api

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // logica para mostrar productos
  const [productToShow, setProductToShow] = useState({});

  // logica para cerrar productos
  const [isVisible, setIsVisible] = useState(true);

  // logica para myOrders
  const [order, setOrder] = useState([]);

  // logica para abrir el modal
  const [isOpen, setIsOpen] = useState(false);

  // logica para un carrito
  const [productCart, setProductCart] = useState([]);
  const [isVisibleCheck, setIsVisibleCheck] = useState(true);

  // logica del buscador
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredItems, setFilteredItems] = useState(null);

  // logica de category
  const [searchByCategory, setSearchByCategory] = useState('');

  useEffect(() => {
    if (searchTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchTitle, searchByCategory));
    if (searchTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchTitle, searchByCategory));
    if (searchByCategory && !searchTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchTitle, searchByCategory));
    if (!searchByCategory && !searchTitle) setFilteredItems(filterBy(null, items, searchTitle, searchByCategory));
  }, [items, searchTitle, searchByCategory]);

  return {
    setProductCart,
    productCart,
    productToShow,
    setProductToShow,
    count,
    setCount,
    isVisible,
    setIsVisible,
    isVisibleCheck,
    setIsVisibleCheck,
    order,
    setOrder,
    isOpen,
    setIsOpen,
    searchTitle,
    setSearchTitle,
    items,
    setItems,
    filteredItems,
    searchByCategory,
    setSearchByCategory,
  };
};

export default useInitialState;
