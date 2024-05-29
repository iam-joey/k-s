import React from "react";

export function Hero() {
  return (
    <div className="relative w-full bg-white my-2 ">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-xs font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Reliable Transportation Solutions for Medical and Everyday Needs in
            Minnesota
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Welcome to our transportation services, where we specialize in
            providing both medical and general transportation solutions.
            Catering to the needs of Minnesota, we are dedicated to ensuring
            safe, reliable, and timely transport for all our clients. Whether
            you require assistance for medical appointments or need a dependable
            transport service for daily commutes, our experienced team is here
            to facilitate your journey with utmost care and professionalism
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div></div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 mt-14">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
