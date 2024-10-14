import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Main from './components/layout/Main.jsx';
import Register from './components/Register/Register.jsx';
import RegisterRBS from './components/RegisterRBS/RegisterRBS.jsx';
import RegisterBS from './components/RegisterBS/RegisterBS.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/register-rbs',
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path: '/register-bs',
        element: <RegisterBS></RegisterBS>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
