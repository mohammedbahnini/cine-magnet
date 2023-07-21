import { useState } from 'react';
import Home from './pages/Home';
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router-dom';
import AllMovies from './pages/AllMovies';

const router = createBrowserRouter(
  [
    {
      path : '/' , 
      element : <Home />
    }
    ,{
      path : '/all-movies' , 
      element : <AllMovies />
    }
  ]
)

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
