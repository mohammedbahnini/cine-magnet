import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import SingleMovie from './pages/SingleMovie';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <>
      <div className="page-loader">
        <p>loading page ...</p>
      </div>
      {/* <Outlet /> */}
    </>

  )
}

export default App
