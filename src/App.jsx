import { createContext, useEffect, useReducer, useState } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import AllMovies from './pages/AllMovies';
import SingleMovie from './pages/SingleMovie';
import ScrollToTop from './components/ScrollToTop';
import { router } from './main';

export const stateContext = createContext();

const initialValue = {
    movies: [],
    currentPage: 1,
    pages: 30,
    pagesToShow: 5,
    totalMovies: 0,
    querySearch: '',
    moviesPerPage: 20,
    loadingPage: true
}
const reducer = (state, action) => {
    return { ...state, ...action }
}




function App() {

  const [state, dispatch] = useReducer(reducer, initialValue);


  return (
    //<stateContext.Provider value={{ state , dispatch }}>
      <RouterProvider router={router} />
    //</stateContext.Provider>

  )
}

export default App
