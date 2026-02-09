import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products/Products'
import AddProducts from '../pages/AddProducts'
import EditProducts from '../pages/EditProducts'


const routes = createBrowserRouter([{
  path: "/",
  element: <Auth />,
  children: [
    {
      path: "",
      element: <SignIn />
    },
    {
      path: "signup",
      element: <SignUp />
    }
  ]
},
{
  path: "/dashboard",
  element: <Dashboard />,
  children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "add",
        element: <AddProducts/>
      },
      {
        path: "edit/:id",
        element: <EditProducts/>
      },
    ]
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
