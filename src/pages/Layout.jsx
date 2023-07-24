import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { createContext, useEffect, useReducer, useState } from "react";
import PageLoader from "../components/PageLoader";

export const stateContext = createContext();
const initialValue = {
    movies: [],
    currentPage: 1,
    pages: 30,
    pagesToShow: 5,
    totalMovies: 0,
    querySearch: '',
    moviesPerPage: 20 , 
    loadingPage : false  
}
const reducer = (state, action) => {
    return { ...state, ...action }
}




export default function Layout() {

    const [state, dispatch] = useReducer(reducer, initialValue);


    useEffect(() => {
        // add event listener to the doc for nav styling
        const header = document.querySelector('header');
        window.addEventListener("scroll", function (e) {
            if (window.scrollY >= 100)
                header.classList.add('scrolled');
            else
                header.classList.remove('scrolled');
        });




    }, []);


    return (
        <>
            {
                state.loadingPage ? (
                    <PageLoader />
                )
                    :
                    (
                        <>
                         <stateContext.Provider value={{ state, dispatch }}>
                            <Header />
                            <main>
                                <Outlet  />
                            </main>
                            </stateContext.Provider>
                        </>
                    )
            }

        </>
    )
}