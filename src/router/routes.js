import load from './load';

import Home from '~/pages/home'
import Create from '~/pages/create'

const routes = [
  {
    component: load(() => import('~/layouts')),
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      }, {
        path: "/create",
        exact: true,
        component: Create
      }
    ]
  }
];

export default routes;