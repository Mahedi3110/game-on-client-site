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
import SingleProduct from '../public/SingleProduct.js';
import SoloProduct from '../public/SoloProduct.js';
import ViewDetails from './components/body/ViewDetails.jsx';
import ViewProduct from './components/body/ViewProduct.jsx';

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
        element: <AllProducts></AllProducts>,
        loader: async () => {
          return fetch(`http://localhost:7000/addList`);
        }
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
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: SingleProduct
      },
      {
        path: "/view-product/:id",
        element: <PrivateRoute><ViewProduct></ViewProduct></PrivateRoute>,
        loader: SoloProduct
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
