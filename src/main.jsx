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
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
        loader: () => fetch('http://localhost:5000/user')
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
