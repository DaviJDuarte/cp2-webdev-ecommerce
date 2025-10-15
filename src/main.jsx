import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Layout from "./Layout";

const router = createBrowserRouter([{
  path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "perfil", element: <Profile /> },
      { path: "carrinho", element: <Cart /> },
    ],
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
