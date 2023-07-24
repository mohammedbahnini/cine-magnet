import { useEffect } from "react";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import MovieSuggestions from "../components/MovieSuggestion";
import '../scss/single.scss';

export default function SingleMovie() {
    useEffect( ()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
            <Header className='scrolled'  />
            <main>
                <MovieDetails />
                <MovieSuggestions />
            </main>
        </>
    )
}