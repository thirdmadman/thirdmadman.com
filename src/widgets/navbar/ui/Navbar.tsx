import { MenuLink } from './MenuLink';
import { useState } from 'react';
import { BurgerMenuButton } from './BurgerMenuButton';
import { Link } from 'react-router';
import { ROUTES } from '@/constants';
import { ThemeSwitch } from './ThemeSwitch';

interface INavBarProps {
  menuLinks: Array<{ title: string; link: string }>;
}

export function Navbar({ menuLinks }: INavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-100 bg-white border-b border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link to={ROUTES.MAIN}>
                <img
                  className="size-8 invert dark:filter-none"
                  src="/svg/thirdmadman-logo-white.svg"
                  alt="thirdmadman.com"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuLinks.map((el) => (
                  <MenuLink key={el.link} link={el.link} text={el.title} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
            <div className="-mr-2 flex md:hidden">
              <BurgerMenuButton isMenuOpen={isMobileMenuOpen} setIsMenuOpen={setIsMobileMenuOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {menuLinks.map((el) => (
            <MenuLink key={el.link} link={el.link} text={el.title} />
          ))}
        </div>
      </div>
    </nav>
  );
}
