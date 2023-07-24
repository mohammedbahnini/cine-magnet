import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllMovies from './pages/AllMovies.jsx'
import SingleMovie from './pages/SingleMovie.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './pages/Layout.jsx'
import { homeLoader } from './loaders/homeLoader.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} loader={homeLoader} />
      <Route path='all-movies' element={<AllMovies />} />
      <Route path='movie-details/:movieId' element={<SingleMovie />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
