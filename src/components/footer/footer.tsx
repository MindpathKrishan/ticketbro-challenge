import React, { FC } from "react";
import Image from "next/image";
import Logo from "@/components/logo";

/**
 * Footer Component for the App
 * @returns {FC}
 */
const Footer: FC = () => (
  <footer>
    <div className="bg-primary-50 py-20">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/6 flex justify-center md:justify-start pr-16 align-items-start flex-col">
          <Logo />
          <div className="flex mt-6 gap-2">
            <Image
              src="/facebook.svg"
              alt="facebook-image"
              width={200}
              height={100}
            />
            <Image
              src="/youtube.svg"
              alt="youtube-image"
              width={200}
              height={100}
            />
            <Image
              src="/instagram.svg"
              alt="instagram-image"
              width={200}
              height={100}
            />
            <Image
              src="/linkedin.svg"
              alt="linkedin-image"
              width={200}
              height={100}
            />
            <Image
              src="/tiktok.svg"
              alt="tiktok-image"
              width={200}
              height={100}
            />
          </div>
        </div>
        <div className="w-full md:w-1/6 pr-16">
          <nav>
            <h4 className="text-md font-medium text-primary-700 mb-4">
              Product
            </h4>
            <ul>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Selfstarter
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/6 pr-16">
          <nav>
            <h4 className="text-md font-medium text-primary-700 mb-4">
              Features
            </h4>
            <ul>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Workload
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Bookable 24/7
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/6 pr-16">
          <nav>
            <h4 className="text-md font-medium text-primary-700 mb-4">
              Company
            </h4>
            <ul>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Contact Sales
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/6 pr-16">
          <nav>
            <h4 className="text-md font-medium text-primary-700 mb-4">Help</h4>
            <ul>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Customer support
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  Help center
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-1/6">
          <nav>
            <h4 className="text-md font-medium text-primary-700 mb-4">
              Get the app
            </h4>
            <ul>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  <Image
                    src="/google-play.svg"
                    alt="google-play-image"
                    width={200}
                    height={100}
                  />
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-500 py-2 block">
                  <Image
                    src="/app-store.svg"
                    alt="app-store-image"
                    width={200}
                    height={100}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="mx-auto bg-primary-900 py-8">
      <div className="flex justify-between items-center text-white container mx-auto">
        <div className="md:w-1/2">
          <p className="text-footer-1">Copyright © 2023</p>
        </div>
        <div className="md:w-1/2">
          <nav className="flex justify-end gap-6 items-center">
            <a href="#" className="text-footer-2">
              Imprint
            </a>
            <svg
              width="1"
              height="12"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="12"
                stroke="#334155"
              />
            </svg>
            <a href="#" className="text-footer-2">
              Data policy
            </a>
            <svg
              width="1"
              height="12"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="12"
                stroke="#334155"
              />
            </svg>
            <a href="#" className="text-footer-2">
              Terms & conditions
            </a>
            <svg
              width="1"
              height="12"
              viewBox="0 0 1 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="12"
                stroke="#334155"
              />
            </svg>
            <a href="#" className="text-footer-2 flex gap-2">
              <Image
                src="/globe.svg"
                alt="globe-image"
                width={16}
                height={16}
              />
              English
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
