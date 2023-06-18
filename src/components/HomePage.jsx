import React, { useEffect, useState } from 'react';
import Themes from '@components/Theme';
import Footer from '@components/Footer';
import Promo from './Promo';
import PhotoGallery from './PhotoGallery';
import Products from './products';

import { Navbar, Button } from 'flowbite-react';
import Image from 'next/image';
import uno from '@icons/nike.webp';
import logo from '@icons/logo.png';

import { useRouter } from 'next/router';
import es from '../../translated/es';
import en from '../../translated/en';
import Select from './Lenguaje';

const Group = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      setDarkMode(storedTheme ? JSON.parse(storedTheme) : false);
    }
  }, []);

  const { locale } = useRouter();
  const translated = locale === 'en' ? en : es;

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(updatedDarkMode));
    }
  };

  console.log(darkMode, typeof darkMode);

  return (
    <div className={`h-full mx-auto ${darkMode ? 'dark' : ''}`}>
      <Navbar className="fixed dark:bg-black z-50 w-full top-0" fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">{/* <Image src={Logo} className="" alt="Flowbite Logo"></Image> */}</Navbar.Brand>
        {/* <div className="flex md:order-2">
          <Button className="dark:bg-emerald-500 dark:hover:bg-emerald-600 bg-indigo-500 hover:bg-indigo-600 mr-5 hidden lg:block" href="/User">
            PROBAR
          </Button>
          <Navbar.Toggle className="hidden lg:block" />
        </div> */}
        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Navbar.Link>
          <Navbar.Link href="/Form" className="mt-3">
            <h3 className="cursor-pointer">{translated.news.contact}</h3>
          </Navbar.Link>
          <Navbar.Link className="mt-3">
            <Select />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="bg-neutral-50 py-10 text-neutral-800 dark:bg-emerald-500 dark:text-neutral-200">
        <div className="flex px-10 mb-5 md:hidden">
          <Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="mt-3 ml-5">
            <Select />
          </div>
        </div>
        <h3 className=" text-3xl text-center font-bold px-10 md:mt-10 mb-10">{translated.news.subtitle}</h3>
        <div className="grid place-items-center">
          <div className="hidden md:block">
            <Image src={uno} alt="Image-page-init"></Image>
          </div>
          <div className="md:hidden ">
            <Image src={logo} alt="logo"></Image>
          </div>
          <div>
            <h1 className="text-4xl px-10 md:mt-10">{translated.news.slogan}</h1>
          </div>
        </div>
        <div>
          <div className="px-10">
            <h2 className="place-items-center text-3xl text-center mt-5">
              <strong>{translated.news.first}</strong>
            </h2>
          </div>
          <div className="lg:grid text-center place-items-center mt-3">
            <PhotoGallery />
            <div className="dark:text-white text-black mt-7">
              <h1 className="lg:text-4xl sm:text-1xl font-bold">
                <strong>{translated.news.trinity}</strong>
              </h1>
              <p className="lg:text-2xl sm:text-1xl mt-3 px-10">{translated.news.offert}</p>
            </div>
            <div className="px-10">
              <Button
                href="https://api.whatsapp.com/send?phone=17867958836&text=Hola%2C%20necesito%20ayuda%20voy%20hacer%20una%20compra"
                className="bg-indigo-500 text-center mt-10 dark:bg-emerald-500"
              >
                {translated.news.compra}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid">
        <Promo />
      </div>
      <div className="lg:grid mb-10 px-10">
        <Products />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Group;
