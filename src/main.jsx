import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project'
import ErrorPage from './pages/404'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path : "/",
    element : <div>Hello World</div>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/home",
    element : <Home/>
  },
  {
    path : "/project",
    element : <Project/>
  },
  {
    path : "/about",
    element : <About/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)