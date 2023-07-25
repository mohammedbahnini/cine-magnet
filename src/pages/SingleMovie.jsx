import { useEffect } from "react";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import MovieSuggestions from "../components/MovieSuggestion";
import '../scss/single.scss';

export default function SingleMovie() {

    
    return (
        <>
            <MovieDetails />
            <MovieSuggestions />
        </>
    )
}