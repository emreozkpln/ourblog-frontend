import React from "react";
import Link from "next/link";

function Header({ lang }) {
  if (lang == "tr") {
    return (
      <div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-5 md:px-20 py-8 w-full grid space-x-10">
        <div className="items-center justify-between flex">
          <Link href="/" className="text-3xl text-white">
            LOGO
          </Link>
          <div className="flex space-x-2 sm:space-x-5">
            <div className="flex space-x-2 bg-color3 border border-gray-100 text-white p-4 rounded-lg font-light">
              <Link href="/en">EN</Link>
              <div>/</div>
              <div className="flex flex-col space-x-0 font-bold">
                <Link href="/">TR</Link>
                <div className="bg-gray-300 h-0.5 w-full rounded-lg -mt-1 "></div>
              </div>
            </div>
            <Link
              href="/iletisim"
              className="bg-color3 border border-gray-100 text-white p-4 rounded-lg font-semibold"
            >
              Bizi tanı
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gradient-to-r from-color1 via-color2 to-color3 px-5 md:px-20 py-8 w-full grid space-x-10">
        <div className="items-center justify-between flex">
          <Link href="/en" className="text-3xl text-white">
            LOGO
          </Link>
          <div className="flex space-x-2 sm:space-x-5">
            <div className="flex space-x-2 bg-color3 border border-gray-100 text-white p-4 rounded-lg font-light">
              <div className="flex flex-col">
                <Link className="font-bold" href="/en">EN</Link>
                <div className="bg-gray-300 h-0.5 w-full rounded-lg -mt-1"></div>
              </div>
              <div>/</div>
              <Link href="/">TR</Link>
            </div>
            <Link
              href="/en/contact"
              className="bg-color3 border border-gray-100 text-white p-4 rounded-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
