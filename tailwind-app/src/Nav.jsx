
import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); 

  const navigation = [
    { title: 'Inicio', href: '#home', available: true },
    { title: 'Servicios', href: '#services', available: true },
    { title: 'Proyectos', href: '#projects', available: false }, 
    { title: 'Contacto', href: '#contact', available: true },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MiEmpresa</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)} 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen} 
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
         {/*
            Aquí se utiliza el método .map() sobre el arreglo 'navigation'.
            Para cada objeto 'e' (elemento) en 'navigation', se genera un <li>.
            - 'e.href' se usa para el atributo href del enlace <a>.
            - La clase del enlace <a> cambia condicionalmente basado en 'e.available':
              - Si 'e.available' es true, se aplican clases para un enlace activo/disponible.
              - Si 'e.available' es false, se aplican clases para un enlace que parece deshabilitado o diferente.
            - 'e.title' se muestra como el texto del enlace.
            - 'key={e.title}' o 'key={e.href}' (o un id único si lo tuvieras) es importante para React
              para identificar de manera única cada elemento en la lista, lo que ayuda con la eficiencia
              al actualizar el DOM. Usaremos e.title como key asumiendo que los títulos son únicos.
          */}
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map(e => ( 
              <li key={e.title}>
                <a
                  href={e.href}
                  className={
                    e.available
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-400 rounded cursor-not-allowed md:p-0 dark:text-gray-500"
                  }
                  aria-current={e.available ? "page" : undefined} 
                  onClick={(event) => !e.available && event.preventDefault()} 
                >
                  {e.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
