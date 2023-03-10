import ReactDOM from 'react-dom/client';

import './index.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './components/router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
