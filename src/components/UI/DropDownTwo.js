import Link from 'next/link';
import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 border text-lg px-8 rounded-lg  focus:outline-none flex items-center"
      >
        Catagoris
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ml-2 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3.586L3.707 9.879a1 1 0 101.414 1.414L10 6.414l5.879 5.879a1 1 0 101.414-1.414L10 3.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-1 bg-white border rounded-lg shadow-lg">
          <Link href='/categories/cpu' className="px-4 py-2 hover:bg-blue-100 flex">CPU / Processor</Link>
          <Link href='/categories/motherboard' className="px-4 py-2 hover:bg-blue-100 flex">Motherboard</Link>
          <Link href='/categories/ram' className="px-4 py-2 hover:bg-blue-100 flex">RAM</Link>
          <Link href='/categories/psu' className="px-4 py-2 hover:bg-blue-100 flex">Power Supply Unit</Link>
          <Link href='/categories/storage' className="px-4 py-2 hover:bg-blue-100 flex">Storage Device</Link>
          <Link href='/categories/monitor' className="px-4 py-2 hover:bg-blue-100 flex">Monitor</Link>
          <Link href='/categories/others' className="px-4 py-2 hover:bg-blue-100 flex">Others</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
