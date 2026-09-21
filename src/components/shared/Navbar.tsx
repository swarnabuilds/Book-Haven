'use client';

import Image from "next/image";
import logo from '@/assets/book.ico';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
      
    const links = (
      <>
        <li>
          <Link 
            href='/' 
            className={`font-medium transition-colors duration-200 ${
              pathname === '/' ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'hover:text-emerald-500 text-slate-700'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href='/books' 
            className={`font-medium transition-colors duration-200 ${
              pathname === '/books' ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'hover:text-emerald-500 text-slate-700'
            }`}
          >
            Books
          </Link>
        </li>
        <li>
          <Link 
            href='/listed-books' 
            className={`font-medium transition-colors duration-200 ${
              pathname === '/listed-books' ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'hover:text-emerald-500 text-slate-700'
            }`}
          >
            Listed Books
          </Link>
        </li>
        <li>
          <Link 
            href='/read-books' 
            className={`font-medium transition-colors duration-200 ${
              pathname === '/read-books' ? 'text-emerald-600 font-bold border-b-2 border-emerald-600' : 'hover:text-emerald-500 text-slate-700'
            }`}
          >
            Read Books
          </Link>
        </li>
      </>
    );

    return (
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-pink-100 shadow-sm transition-all">
        <div className="navbar container mx-auto px-4 py-2">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-pink-50 text-emerald-600 rounded-lg">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-pink-100 gap-1 text-slate-700">
                {links}
              </ul>
            </div>
            
            <Link href='/' className="group">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-pink-100 rounded-xl group-hover:bg-emerald-100 transition-colors duration-300">
                    <Image src={logo} alt="logo" width={28} height={28} className="object-contain" />
                  </div>
                  <span className="text-2xl font-black bg-gradient-to-r from-emerald-600 via-teal-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                    Book Vibe
                  </span>
                </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
               {links}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            <button className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white px-6 rounded-full shadow-md shadow-emerald-200 hover:shadow-lg transition-all">
              Sign in
            </button>
            <button className="btn btn-error btn-outline text-black px-6 rounded-full hover:shadow-md transition-all">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;