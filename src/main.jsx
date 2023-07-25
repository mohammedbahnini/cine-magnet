import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AllMovies from './pages/AllMovies.jsx'
import SingleMovie from './pages/SingleMovie.jsx'
import Layout from './pages/Layout.jsx'
import { homeLoader } from './loaders/homeLoader.js'

import Home from './pages/Home.jsx'
// const Home = lazy( ()=> import('./pages/Home.jsx'));





export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='all-movies' element={<AllMovies />} />
      <Route path='movie-details/:movieId' element={<SingleMovie />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
