import React from 'react';
import ReactDom from 'react-dom/client';

import { Login } from './containers/login';
import GlobalStyles from './styles/globalStyles';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
  </React.StrictMode>,
);
