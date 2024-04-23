'use client'
import { useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <header className='flex justify-around items-center py-7 mx-auto max-w-7xl font-font-sg font-bold'>
    <div className='flex justify-between content-center items-center gap-10 '>
        <div className=''>
            <FontAwesomeIcon className="fa-2xl" icon={faBars} />
        </div>
        <div className='mt-0 pt-0 -mt-5'>
            <Link href="/">
              <img className='w-full' src="./assets/logo.png"/></Link>
        </div>
    </div>

  <nav className='hidden md:block lg:flex'>
      <div >
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



    </header>
  );
};

export default NavBar;