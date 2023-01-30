import React from "react";

const BannerCta = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto  pt-24 sm:pt-24">
        <div className="relative isolate overflow-hidden bg-primary-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-24 lg:pb-20">
            <h2 className="text-3xl font-bold text-white sm:text-4xl leading-8">
              Do you want to know
              <br /> more about ticketbro?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Let’s get started. It only takes a few minutes.
            </p>
            <div className="mt-16 flex items-center justify-center">
              <a
                href="#"
                className="rounded-xl bg-white px-7 py-5 text-base mb-14 md:mb-0 font-normal leading-4 text-primary-700 shadow-sm hover:bg-gray-100"
              >
                Let’s get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCta;
