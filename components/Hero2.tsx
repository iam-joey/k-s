"use client";
import React from "react";

export default function Hero2() {
  return (
    <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container mb-28 md:mb-0">
      <h1 className="xl:text-5xl md:text-4xl text-xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
        We have provided professional transportation services for both medical
        needs and general commuting to over 30K+ clients throughout Rural
        Minnesota.
      </h1>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map image"
          className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile-image"
          className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p className="text-3xl font-semibold text-gray-800">30K+</p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
            Happy Customers
          </p>
        </div>
      </div>
    </div>
  );
}
