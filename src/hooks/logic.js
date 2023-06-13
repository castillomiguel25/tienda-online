import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

export const useDarkModeLogic = () => {
  // logica para efecto modo oscuro
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  //   logica para abrir laos detalles de compra
  const [toggleOrders, setToggleOrders] = useState(false);

  //   logica para abrir las lista de compra
  const [checkoutOrders, setcheckoutOrders] = useState(false);

  // logica para abrir configuraciones
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { state } = useContext(AppContext);

  return {
    darkMode,
    setDarkMode,
    toggle,
    toggleOrders,
    setToggleOrders,
    handleToggle,
    toggleDarkMode,
    state,
    checkoutOrders,
    setcheckoutOrders,
  };
};
