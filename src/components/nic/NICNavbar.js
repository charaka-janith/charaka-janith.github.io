import React from 'react';

export default function NICNavbar() {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-gray-800 mb-4 md:mb-0">
          <a
            href={"/"}
            target="_self"
          >
            <div className="ml-3 text-xl">
              DARK SL
            </div>
          </a>
        </div>
        <nav
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-800">
          <label className="block tracking-wide title-font font-bold text-xl"
                 htmlFor="grid-nic-number">
            National Identity Card Information Zone - Sri Lanka
          </label>
        </nav>
      </div>
    </header>
  );
}