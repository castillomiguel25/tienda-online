import React from 'react';
import firebaseApp from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const Menu = () => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="my-14">
      <ul>
        <li className="text-center flex justify-center text-black dark:text-white">
          <button className="cursor-pointer mt-10" onClick={handleSignOut}>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
