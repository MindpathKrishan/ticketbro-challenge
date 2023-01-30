import React from "react";
import Logo from "@/components/logo";
import { Menu, Transition } from "@headlessui/react";

import { ChevronDown } from "@/assets/icons";

const AppBar = () => {
  const hoverEffect =
    "hover:pt-9 hover:border-t-2 hover:border-primary-500 hover:text-primary-300";

  return (
    <>
      <header className="header">
        <div className="isolate bg-white">
          <div className="px-10 pt-0">
            <nav
              className="flex items-start justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1 pt-10">
                <a href="#" className="-m-1.5 p-1.5">
                  <Logo />
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                <a
                  href="#"
                  className={`text-sm font-medium leading-6 text-base text-primary-700 pt-10 header-menu ${hoverEffect}`}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`text-sm font-medium leading-6 text-base text-primary-700 pt-10 ${hoverEffect}`}
                >
                  <Menu
                    as="div"
                    className="relative inline-block text-left z-10"
                  >
                    <div>
                      <Menu.Button className="gap-1 items-center inline-flex w-full justify-center text-sm font-medium text-primary-700 hover:text-primary-300">
                        Features
                        <ChevronDown />
                      </Menu.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Archive
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </a>
                <a
                  href="#"
                  className={`text-sm font-medium leading-6 text-base text-primary-700 pt-10 ${hoverEffect}`}
                >
                  <Menu
                    as="div"
                    className="relative inline-block text-left z-10"
                  >
                    <div>
                      <Menu.Button className="inline-flex gap-1 items-center w-full justify-center text-sm font-medium text-primary-700 hover:text-primary-300">
                        Case Studies
                        <ChevronDown />
                      </Menu.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-violet-500 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Archive
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </a>
                <a
                  href="#"
                  className={`text-sm font-medium leading-6 text-base text-primary-700 pt-10 ${hoverEffect}`}
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className={`text-sm font-medium leading-6 text-base text-primary-700 pt-9 border-t-2 border-primary-500 text-primary-300 ${hoverEffect}`}
                >
                  Blog
                </a>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end pt-6">
                <a
                  href="#"
                  className="rounded-xl bg-primary-500 px-7 py-4 text-sm font-normal leading-4 text-white shadow-sm hover:bg-primary-600"
                >
                  Get started
                </a>
              </div>
            </nav>
            <div role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Logo />
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 menu-item block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Product
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Features
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Marketplace
                      </a>

                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        Company
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppBar;
