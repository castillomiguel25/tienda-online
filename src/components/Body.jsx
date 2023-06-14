import React, { useContext } from 'react';
import Menu from '@components/Configmenu';
import ProductTabs from '@components/ProductTabs';
import Carousels from '@components/Carousel';
import CheckoutSide from '@components/CheckoutSideMenu';
import { useDarkModeLogic } from '../hooks/logic';
import { Navbar, Button } from 'flowbite-react';
import Image from 'next/image';
import { AiFillSetting } from 'react-icons/ai';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import Themes from '@components/Theme';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  const { toggle, handleToggle, checkoutOrders, setcheckoutOrders } = useDarkModeLogic();
  const { count, filteredItems } = useContext(AppContext);

  const renderAPI = () => {
    if (filteredItems) {
      const allImages = filteredItems.flatMap((item) => item.images);
      const carouselData = {
        title: 'Carousel Title',
        images: allImages,
      };
      return <Carousels key="carousel" data={carouselData} />;
    }
  };

  return (
    <div>
      <div className="fixed z-50 header top-0">
        <Navbar className="dark:bg-white" fluid rounded>
          <Navbar.Brand href="#">
            <Image src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"></Image>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button className="bg-indigo-500 dark:bg-emerald-500">Get startedss</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link active>
              <Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </Navbar.Link>
            <Navbar.Link onClick={handleToggle} className="mt-2">
              <AiFillSetting size={30} />
            </Navbar.Link>
            <Navbar.Link className="mt-3">
              <div className="relative">
                <Image onClick={() => setcheckoutOrders(!checkoutOrders)} src={shoppingCart} alt="shopping cart" />
                <div>
                  {count > 0 && (
                    <h1 className="bg-white mb-2 text-black dark:bg-black dark:text-white absolute -top-2 -right-2 rounded-full w-6 h-6 flex items-center justify-center text-sm">{count}</h1>
                  )}
                </div>
                {count.length > 0 && <div>{count.length}</div>}
              </div>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {toggle && <Menu />}
      {checkoutOrders && <CheckoutSide />}

      <div className="bg-indigo-500 text-black dark:bg-white dark:text-black"></div>
      <div className="w-screen flex justify-center">{renderAPI()}</div>
      <div className="grid place-items-center">
        <ProductTabs />
      </div>
      {children}
    </div>
  );
};

export default Layout;
