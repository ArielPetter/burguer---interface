import { createBrowserRouter } from 'react-router-dom';

import { Login } from '../containers/login';
import { Register } from '../containers/Register';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
