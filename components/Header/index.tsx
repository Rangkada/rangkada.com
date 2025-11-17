"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import menuData from "./menuData";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathName]);

  const handleClickJoinAlpha = () => {
    sendGAEvent('event', 'button_click', { value: 'Nav - Join Alpha Program' }); 
  };

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if the link contains a hash
    if (!href.includes('#')) return;

    const [path, hash] = href.split('#');
    
    // If we're already on the target path (or home page), just scroll
    if (pathName === path || (path === '/' && pathName === '/')) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to the page first, then scroll after a short delay
      e.preventDefault();
      router.push(href);
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const isHomePage = pathName === '/' || pathName === '';

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : isHomePage
            ? "bg-transparent"
            : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 transition-all duration-300 ${
              sticky ? "py-4" : "py-6"
            }`}
          >
            <Image
              src={
                sticky || !isHomePage
                  ? "/images/logo/RANGKADA-logo-black.svg"
                  : "/images/logo/RANGKADA-logo-white.svg"
              }
              alt="RANGKADA Logo"
              width={42}
              height={42}
              className="h-14 w-14 mr-2"
            />
            <span
              className={`font-gemunu text-xl tracking-[0.8em] transition-colors ${
                sticky || !isHomePage
                  ? "text-gray-900 hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              RANGKADA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center gap-12">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={(e) => handleHashNavigation(e, menuItem.path || "#")}
                    className={`text-sm font-light tracking-wide transition-colors ${
                      pathName === menuItem.path
                        ? sticky || !isHomePage
                          ? "text-gray-900"
                          : "text-white"
                        : sticky || !isHomePage
                          ? "text-gray-600 hover:text-gray-900"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              onClick={(e) => {
                handleClickJoinAlpha();
                handleHashNavigation(e, "/alpha-partners/apply");
              }}
              href="/alpha-partners/apply"
              className={`group inline-flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                sticky || !isHomePage
                  ? "bg-gray-900 hover:bg-gray-800"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <span
                className={`text-sm font-light tracking-wide transition-colors ${
                  sticky || !isHomePage
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Join Alpha Program
              </span>
              <IconArrowRight
                className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                  sticky || !isHomePage ? "text-white" : "text-gray-900"
                }`}
              />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={navbarToggleHandler}
            aria-label="Mobile Menu"
            className="lg:hidden p-2 -mr-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  sticky || !isHomePage ? "bg-gray-900" : "bg-white"
                } ${navbarOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  sticky || !isHomePage ? "bg-gray-900" : "bg-white"
                } ${navbarOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full transition-all duration-300 ${
                  sticky || !isHomePage ? "bg-gray-900" : "bg-white"
                } ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${
          navbarOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="container py-8 border-t border-gray-200">
          <ul className="space-y-6">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.path || "#"}
                  className={`block text-base font-light text-gray-900 hover:text-gray-600 transition-colors`}
                  onClick={(e) => {
                    setNavbarOpen(false);
                    handleHashNavigation(e, menuItem.path || "#");
                  }}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                onClick={(e) => {
                  handleClickJoinAlpha();
                  handleHashNavigation(e, "/alpha-partners/apply");
                }}
                href="/alpha-partners"
                className="inline-flex items-center gap-3 text-base font-light text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>Join Alpha Program</span>
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
