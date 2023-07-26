import {  useEffect  } from "react";
import SearchSection from "../components/SearchSection";
import MoviesSection from "../components/MoviesSection";
import '../scss/all-movies.scss';
import { useOutletContext, useSearchParams } from "react-router-dom";

export default function AllMovies() {


    return (
        <>
           
                <SearchSection />
                <MoviesSection />

        </>
    )
}