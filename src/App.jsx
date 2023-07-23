import { useState } from 'react';
import Home from './pages/Home';
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import SingleMovie from './pages/SingleMovie';

const router = createBrowserRouter(
  [
    {
      path : '/' , 
      element : <Home />
    }
    ,{
      path : '/all-movies' , 
      element : <AllMovies />
    } , 
    {
      path : '/movie-details/:movieId' , 
      element : <SingleMovie />
    }
  ]
)

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
