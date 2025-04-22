import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavbarLayout from './Layout/Navbar/Navbar'
import About from  "./Pages/AboutPage/AboutPage"
import Doctors from "./Pages/DoctorsPage/DoctorsPage";
import Contact from "./Pages/ContactPage/ContactPage"
import MainBox from './Layout/MainBox/MainBox';
import NotFoundPage from './NotFound/NotFound';
import Dashboard from './DashboardPage/DashboardPage'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout/>,
      children: [
        {
          index: true,
          element: <MainBox/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/doctors",
          element: <Doctors/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        },
        {
          path: "*", 
          element: <NotFoundPage />, 
        },

      ]
    }
  ])

  return (
    <div className='appdiv'>
      
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
