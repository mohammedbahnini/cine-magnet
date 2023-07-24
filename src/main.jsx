import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AllMovies from './pages/AllMovies.jsx'
import SingleMovie from './pages/SingleMovie.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    }
    , {
      path: '/all-movies',
      element: <AllMovies />
    },
    {
      path: '/movie-details/:movieId',
      element: <SingleMovie />
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <ScrollToTop />
      <App />
    </RouterProvider>

  </React.StrictMode>,
)
