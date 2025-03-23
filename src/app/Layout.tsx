import { ROUTES } from '@/constants';
import { ThemeSwitch } from '@/features/theme-switch';
import { useState } from 'react';
import { Link, Outlet } from 'react-router';

const menuArray = [
  {
    title: 'Home',
    link: ROUTES.MAIN,
  },
  {
    title: 'Projects',
    link: ROUTES.PROJECTS,
  },
];

interface IMenuLinkProps {
  link: string;
  text: string;
  isActive?: boolean;
}

function MenuLink({ link, text, isActive = false }: IMenuLinkProps) {
  const baseClasses = 'block rounded-md px-3 py-2 text-sm font-medium';

  let addition = '';

  if (isActive) {
    addition = 'bg-neutral-200 dark:text-black dark:text-white dark:bg-neutral-900 ';
  } else {
    addition =
      'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white';
  }

  return (
    <Link to={link} className={`${baseClasses} ${addition}`} aria-current="page">
      {text}
    </Link>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-100 bg-white border-b border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                className="size-8 invert dark:filter-none"
                src="/svg/thirdmadman-logo-white.svg"
                alt="thirdmadman.com"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuArray.map((el) => (
                  <MenuLink key={el.link} link={el.link} text={el.title} />
                ))}
              </div>
            </div>
          </div>
          <ThemeSwitch />
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md dark:bg-neutral-800 p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 focus:outline-hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {menuArray.map((el) => (
            <MenuLink key={el.link} link={el.link} text={el.title} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Layout() {
  return (
    <div className="min-h-full dark:bg-neutral-900">
      <Navbar />
      <Outlet />
    </div>
  );
}
