import React, { useState } from 'react';
import Home from '@pages/HomeUser';
import House from '../../pages/HomeInitial';


function App() {
  const [user, setUser] = useState(null);


  return <>{user ? <Home user={user} /> : <House />} </>;
}

export default App;
