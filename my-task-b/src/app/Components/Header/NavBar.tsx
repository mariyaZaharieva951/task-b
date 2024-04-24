'use client'
import { useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex justify-between items-center pt-3 px-8 mx-5 mx-auto max-w-6xl font-font-sg font-bold'>
    <div className='flex justify-between content-center items-center gap-6'>
        <div className='hidden lg:block mt-2'>
            <FontAwesomeIcon className="fa-2xl" icon={faBars} />
        </div>
        <div className='mt-0 pt-0 -mt-5'>
            <Link href="/">
              <img className='w-full' src="./assets/logo.png"/></Link>
        </div>
    </div>

  <nav className='hidden md:block lg:flex'>
      <div className='mt-4'>
        <ul className='flex justify-between gap-x-4 text-sm whitespace-nowrap mx-5'>
          <li>
            <Link href="/travels" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Почивки и екскурзии
            </Link>
          </li>
          <li>
            <Link href="/hotels" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Хотели
            </Link>
          </li>
          <li>
            <Link href="/blog" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Блог
            </Link>
          </li>
          <li>
            <Link href="/about" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='hover:bg-gray-100 hover:rounded-md px-4 py-2'>
              Контакти
            </Link>
          </li>
        </ul>
      </div>
  </nav>


  <div className='md:hidden flex justify-end'>
        <button onClick={toggleMenu} className='focus:outline-none'>
        <FontAwesomeIcon className="fa-2xl" icon={faBars} />
        </button>
      </div>

      {isOpen && (
        <nav className='md:hidden absolute top-16 right-0 bg-white text-custom-green shadow-md rounded-md'>
          
        <div >
        <ul className='flex flex-col gap-y-2 text-sm'>
          <li>
            <Link href="/travels" className='block px-4 py-2'>
              Почивки и екскурзии
            </Link>
          </li>
          <li>
            <Link href="/hotels" className='block px-4 py-2'>
              Хотели
            </Link>
          </li>
          <li>
            <Link href="/blog" className='block px-4 py-2'>
              Блог
            </Link>
          </li>
          <li>
            <Link href="/about" className='block px-4 py-2'>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className='block px-4 py-2'>
              Контакти
            </Link>
          </li>
          
        </ul>
        </div>
          
        </nav>
      )}


    </header>
  );
};

export default NavBar;