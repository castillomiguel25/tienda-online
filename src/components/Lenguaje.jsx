import React from 'react';
import { useRouter } from 'next/router';

const Select = () => {
  const router = useRouter();
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };
  return (
    <div className="flex justify-center">
      <div className="">
        <div>
          <select className="bg-white text-black rounded-2xl dark:bg-white dark:text-black" onChange={handleChange} data-te-select-init data-te-select-size="sm">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
