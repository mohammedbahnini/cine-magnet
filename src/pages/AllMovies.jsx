import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import MoviesSection from "../components/MoviesSection";
import '../scss/all-movies.scss';
import { useOutletContext, useSearchParams } from "react-router-dom";
import PageLoader from "../components/PageLoader";

export default function AllMovies() {

    const { isLoading , setIsLoading  }= useOutletContext();
 

    useEffect(() => {



        setTimeout(() => {
            //layoutDispatch({ loading : false })
            setIsLoading(false)
            document.body.style.overflow = 'auto';
        }, 3000);


    }, []);

    return (
        <>
           
                <SearchSection />
                <MoviesSection />

        </>
    )
}