import React from 'react';
import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { router } from './routes/index';
import GlobalStyles from './styles/globalStyles';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </React.StrictMode>,
);
