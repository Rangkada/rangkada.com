"use client";

import { sendGAEvent } from '@next/third-parties/google';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const handleClickLinkedIn = () => {
    sendGAEvent('event', 'button_click', { value: 'Footer - LinkedIn' }); 
  }

  const handleClickX = () => {
    sendGAEvent('event', 'button_click', { value: 'Footer - X' }); 
  }

  return (
    <footer className="bg-black text-white py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className={`flex items-center gap-3 transition-all duration-300 mb-4`}
            >
              <Image
                src="/images/logo/RANGKADA-white-bg-round.png"
                alt="RANGKADA Logo"
                width={42}
                height={42}
                className="h-8 w-8 rounded-full"
              />
              <span
                className={`font-gemunu font-semibold text-2xl tracking-[0.5em] transition-colors "text-white hover:text-gray-300"`}
              >
                RANGKADA
              </span>
            </Link>
            <p className="text-base font-light text-gray-400 leading-relaxed mb-8 max-w-sm">
              Transforming Philippine transportation with electric fleet solutions. 
              Zero upfront investment. Guaranteed savings.
            </p>
            <div className="flex items-center gap-6">
              <a
                onClick={handleClickX}
                href="https://www.x.com/rangkada"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" className="stroke-current" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a
                onClick={handleClickLinkedIn}
                href="https://www.linkedin.com/company/rangkada"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 17 16" className="fill-current">
                  <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/vision"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/alpha-partners"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Alpha Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/#what-we-do"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  What We Do
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/alpha-partners/apply"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold text-gray-500 mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base font-light text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light text-gray-500">
              © {new Date().getFullYear()} Rangkada Pte. Ltd.
            </p>
            <p className="text-sm font-light text-gray-500">
              Made in the Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
