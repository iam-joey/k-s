import React from "react";

export function Hero() {
  return (
    <div className="relative w-full bg-white my-2">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            People who care about your health
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            modi blanditiis dolores quasi eaque explicabo! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Eaque, blanditiis, est numquam
            tempora cumque error vel distinctio inventore consectetur voluptate
            molestias adipisci animi explicabo vitae veniam dolorem nostrum unde
            nobis?
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div></div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
