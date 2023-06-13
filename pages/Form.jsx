import Link from 'next/link';
import { Button } from 'flowbite-react';

const Form = () => {
  return (
    <div>
      <form className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-md mt-10 border">
        <div className="mb-4">
          <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Nombre
          </label>
          <input type="text" id="nombre" className="w-full px-3 py-2 placeholder-gray-400 border rounded-md dark:bg-gray-700 dark:text-white" placeholder="Ingrese su nombre" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Email
          </label>
          <input type="email" id="email" className="w-full px-3 py-2 placeholder-gray-400 border rounded-md dark:bg-gray-700 dark:text-white" placeholder="Ingrese su email" />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Mensaje
          </label>
          <textarea id="mensaje" className="w-full px-3 py-2 placeholder-gray-400 border rounded-md resize-none dark:bg-gray-700 dark:text-white" rows="4" placeholder="Ingrese su mensaje"></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
          Enviar
        </button>
      </form>
      <div className="text-center max-w-md mx-auto p-6 flex justify-center items-center">
        <Link href="/">
          <Button className="dark:bg-emerald-500 dark:hover:bg-emerald-600 bg-indigo-500 hover:bg-indigo-600 text-center">Inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
