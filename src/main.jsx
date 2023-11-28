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
import AdminProfile from './Components/Admin/AdminProfile';
import ManageUser from './Components/Admin/ManageUser';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MakeAnnoucement from './Components/Admin/MakeAnnoucement';
import Privet from './Components/Privet/Privet';
import MakeMember from './Components/MakeMember/MakeMember';
const queryClient = new QueryClient();


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
        path: '/member',
        element: <Privet><MakeMember></MakeMember> </Privet>  
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
        element:<Privet><PostDetails></PostDetails></Privet>,
        loader: ({ params }) => fetch(`https://final-effort-server-puce.vercel.app/posts/${params._id}`)
      }
      
    ]
  },
  {
    path: 'dashboard',
    element: <Privet><DashBoard></DashBoard></Privet>,
    loader: () => fetch('https://final-effort-server-puce.vercel.app/users'),
    children: [
      // user Route
      {
        path: "userprofile",
        element:<UserProfile></UserProfile>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/users')
      },
      {
        path: 'useraddpost',
        element: <UserAddPost></UserAddPost>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/posts')
      },
      {
        path: "usermypost",
        element: <UserMyPost></UserMyPost>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/posts')
      },
      {
        path: 'usermypost/postcomment/:postTitle',
        element: <PostComment></PostComment>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/comments')
    
      },
      // admin route
       {
        path: "adminprofile",
        element: <AdminProfile></AdminProfile>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/users')
       },
       {
        path: "manageuser",
        element: <ManageUser></ManageUser>,
        loader: () => fetch('https://final-effort-server-puce.vercel.app/users')
       },
       {
        path: 'annoucement',
        element: <MakeAnnoucement></MakeAnnoucement>
       } 
      
    ]
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
