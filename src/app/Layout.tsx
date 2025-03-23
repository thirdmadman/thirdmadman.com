import { ROUTES } from '@/constants';
import { Navbar } from '@/widgets/navbar';
import { Outlet } from 'react-router';

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

export function Layout() {
  return (
    <div className="min-h-full dark:bg-neutral-900">
      <Navbar menuLinks={menuArray} />
      <Outlet />
    </div>
  );
}
