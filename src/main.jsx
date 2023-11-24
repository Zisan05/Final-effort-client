import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Root/Roots';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
