import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './providers/AuthProvider';
import Users from './components/Users';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-14y9ooz5h-sobayel-44b8503d.vercel.app/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-14y9ooz5h-sobayel-44b8503d.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-14y9ooz5h-sobayel-44b8503d.vercel.app/user')
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
