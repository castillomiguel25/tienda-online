import React, { useState, useEffect } from 'react';
import useInitialState from '../hooks/useInitialState';
import AppContext from '@context/AppContext';
import Layout from '@containers/Layout';
import Body from '@components/Body';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      setDarkMode(storedTheme ? JSON.parse(storedTheme) : false);
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(updatedDarkMode));
    }
  };

  const initialState = useInitialState();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Body darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Layout>
      </AppContext.Provider>
    </div>
  );
};

export default Home;
