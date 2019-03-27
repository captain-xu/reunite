import Home from '~/pages/home'
import load from './load';

const routes = [
  {
    component: load(() => import('~/layouts')),
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      }
    ]
  }
];

export default routes;