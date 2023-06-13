import React from 'react';
import Image from 'next/image';
import sol from '@icons/sol.svg';
import luna from '@icons/luna.svg';

export default function Themes(props) {
  return (
    <>
      <div className="block transition duration-150 ease-in-out mt-2" data-te-nav-link-ref data-te-ripple-init>
        <Image onClick={props.toggleDarkMode} className="h-7 w-7" alt="background" src={props.darkMode ? luna : sol}></Image>
      </div>
    </>
  );
}
