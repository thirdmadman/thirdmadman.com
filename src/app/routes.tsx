import { RouteObject } from 'react-router';

import { ROUTES } from '@/constants';
import { MainPage } from '@/pages/main/MainPage';
import { Layout } from './Layout';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';

export const ROUTES_TREE: Array<RouteObject> = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTES.PROJECTS,
    element: <ProjectsPage />,
  },
  {
    path: '*',
    element: <h1>NOT FOUND</h1>,
  },
];

const routes: RouteObject = {
  element: <Layout />,
  children: ROUTES_TREE,
};

export default routes;
