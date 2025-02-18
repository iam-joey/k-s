export function Service() {
  return (
    <div
      id="services"
      className="relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Services We provide
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-current text-primary"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-current text-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-current text-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
          {/* <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p> */}
        </header>
        {/* End heading */}
        {/* row */}
        <div className="flex flex-wrap -mx-4 text-center">
          <div className="px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6">
            {/* service block */}
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                General Commute Transportation
              </h3>
              <p className="text-gray-500">
                For non-medical travel needs, we provide reliable transportation
                services across Rural Minnesota. Whether it&apos;s commuting to
                work, attending social events, or just a day out in the city,
                our service ensures you arrive at your destination on time and
                with ease.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6">
            {/* service block */}
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Medical Transportation
              </h3>
              <p className="text-gray-500">
                We offer specialized transportation for medical appointments,
                procedures, and emergency services. Our vehicles are equipped to
                ensure comfort and safety for patients with various health
                conditions, and our drivers are trained to handle medical
                transport with the utmost care and discretion.
              </p>
            </div>
            {/* end service block */}
          </div>
          <div className="px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6">
            {/* service block */}
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Customized Transportation Solutions
              </h3>
              <p className="text-gray-500">
                Understanding that each client has unique needs, we offer
                customized transportation solutions tailored to individual
                preferences and requirements. From single trips to regular daily
                services, we are here to accommodate all your transportation
                needs with professionalism and dedication.
              </p>
            </div>
            {/* end service block */}
          </div>
          {/* More service blocks similar to the above can be added here */}
        </div>
        {/* end row */}
      </div>
    </div>
  );
}

export default Service;
