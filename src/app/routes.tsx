import { RouteObject } from 'react-router';

import { ROUTES } from '@/constants';
import { MainPage } from '@/pages/main/MainPage';
import { Layout } from './Layout';

export const ROUTES_TREE: Array<RouteObject> = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
  {
    path: '*',
    element: <h1>NOT FOUND</h1>,
  },
];

const routes: RouteObject = {
  element: <Layout />,
  children: ROUTES_TREE.map((route) => ({
    path: route.path,
    element: route.element,
    children: route.children,
  })),
};

export default routes;
