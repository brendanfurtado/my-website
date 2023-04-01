import React  from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Page {
    name: string;
    path: string;
}

export default function NavBar(){

    const [currentPage, setCurrentPage] = useState<string>("Home");
    const pages: Page[] = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Work", path: "/work" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ];
  
    const handleClick = (page: string) => {
      setCurrentPage(page);
    };
    
    return (
 <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://github.com/brendanfurtado"  target="_blank" className="flex items-center">
                        {/* <div className="h-6 mr-3 sm:h-9">
                            <Image src={'/alogo-4.JPG'} alt={'Brendan'} width={55} height={60}></Image>
                        </div> */}
                        <span className="myName font-eczar flex items-center text-xl font-semibold whitespace-nowrap dark:text-white">Brendan F.</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" 
                            className="font-eczar text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <a  href='/resume.pdf'
                                    target='_blank'
                                >Resume</a>
                            </button>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    
                    <div className="items-center justify-between hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {pages.map((page) => (
                            <li key={page.name}>
                                <Link legacyBehavior href={page.path}>
                                    <a className={`font-eczar text-lg block py-2 pl-3 pr-4 rounded ${
                                        currentPage === page.name
                                            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                            : "text-gray-700 hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    }`}
                                    onClick={() => handleClick(page.name)}
                                >
                                        {page.name}
                                    </a>
                                </Link>
                            </li>
                         ))}
                        </ul>
                    </div>
                </div>
            </nav>
    );

}

