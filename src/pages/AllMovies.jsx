import { createContext, useEffect, useReducer } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import MoviesSection from "../components/MoviesSection";
import '../scss/all-movies.scss';
import { useSearchParams } from "react-router-dom";


export const stateContext = createContext();
const initialValue = {
    movies: [],
    currentPage: 1 , 
    pages : 30 , 
    pagesToShow : 5 , 
    totalMovies : 0 , 
    querySearch : '' , 
    moviesPerPage : 20
}
const reducer = (state, action) => {
    return { ...state, ...action }
}



export default function AllMovies() {
    const [state, dispatch] = useReducer(reducer, initialValue);



    useEffect(() => {
        const header = document.querySelector('header');

        window.addEventListener("scroll", function (e) {
            if (window.scrollY >= 100)
                header.classList.add('scrolled');
            else
                header.classList.remove('scrolled');
        });


    }, []);

    return (
  
            <stateContext.Provider value={{ state, dispatch }}>
                <Header />
                <main>

                    <SearchSection />
                    <MoviesSection />
                </main>
            </stateContext.Provider>
        
    )
}