import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NotFound from './components/body/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx';
import Home from './components/body/Home.jsx';

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
