import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addproduct from './components/Addproduct.jsx';
import Updateproduct from './components/Updateproduct.jsx';
import Signin from './shared/signin.jsx';
import Signup from './shared/Signup.jsx';
import Authentication from './Authentication.jsx';
import Products from './components/Products.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {path:"/",
        element: <Products></Products>,
        loader: ()=> fetch("https://aladin-ashy.vercel.app/product")
      },
      {
        path:"/addproduct",
        element:<Addproduct></Addproduct>
      },
      {
        path: "/updateproduct/:id",
        element: <Updateproduct></Updateproduct>,
        loader: (params)=> fetch(`https://aladin-ashy.vercel.app/product/${params.id}`)
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
        loader: (params)=> fetch("https://aladin-ashy.vercel.app/user/")
      }
    ]
  }
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authentication>
     <RouterProvider router={router} />
     </Authentication>
  </StrictMode>,
)
