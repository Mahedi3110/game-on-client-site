import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NotFound from './components/body/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './components/body/join/Login.jsx';
import Register from './components/body/join/Register.jsx';
import AllProducts from './components/body/AllProduct.jsx';
import About from './components/body/About.jsx';
import Blog from './components/body/Blog.jsx';
import Profile from './components/body/Profile.jsx'
import MyChoice from './components/body/MyChoice.jsx'
import AddProduct from './components/body/AddProduct.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import Home from './components/body/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/my-choice",
        element: <PrivateRoute><MyChoice></MyChoice></PrivateRoute>
      },
      {
        path: "/add-product",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      }
    ]
  },
  {
    path: "/*",
    element: <NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
