import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project'
import ErrorPage from './pages/404'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    errorElement : <ErrorPage/>
  },
  {
    path : "/project",
    element : <Project/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)