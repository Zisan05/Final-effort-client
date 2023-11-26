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
import PostDetails from './Components/PostDetails/PostDetails';
import Errorpage from './Components/Errorpage/Errorpage';
import DashBoard from './Components/DashBoard/DashBoard';
import UserProfile from './Components/UserProfile/UserProfile';
import UserAddPost from './Components/UserAddPost/UserAddPost';
import UserMyPost from './Components/UserMyPost/UserMyPost';
import PostComment from './Components/PostComment/PostComment';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    errorElement: <Errorpage></Errorpage>,
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
      },
      {
        path:"/details/:_id",
        element:<PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/posts/${params._id}`)
      }
      
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "userprofile",
        element:<UserProfile></UserProfile>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: 'useraddpost',
        element: <UserAddPost></UserAddPost>
      },
      {
        path: "usermypost",
        element: <UserMyPost></UserMyPost>,
        loader: () => fetch('http://localhost:5000/posts')
      },
      {
        path: 'usermypost/postcomment/:postTitle',
        element: <PostComment></PostComment>,
        loader: () => fetch('http://localhost:5000/comments')
    
      }
      
    ]
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
