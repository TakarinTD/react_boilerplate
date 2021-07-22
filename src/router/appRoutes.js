// import Login from '../pages/Login';
import Home from '../pages/Home';
import CreateApi from '../pages/CreateApi';

import routes from '../constants/route';

export default [
  {
    path: routes.HOME,
    component: Home,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.CREATE_API,
    component: CreateApi,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.APIS,
    component: CreateApi,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
  {
    path: routes.API_SETS,
    component: CreateApi,
    exact: true,
    restricted: false,
    isPrivate: true,
  },
];
