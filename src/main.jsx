import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AllMovies from './pages/AllMovies.jsx'
import SingleMovie from './pages/SingleMovie.jsx'
import Layout from './pages/Layout.jsx'


import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='all-movies' element={<AllMovies />} />
      <Route path='movie-details/:movieId' element={<SingleMovie />} />
     
    </Route>
     <Route path='*' element={<NotFound />} />
     </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
