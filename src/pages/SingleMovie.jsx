import MovieDetails from "../components/single-movie/MovieDetails";
import MovieSuggestions from "../components/single-movie/MovieSuggestion";
import '../scss/single.scss';

export default function SingleMovie() {

    
    return (
        <>
            <MovieDetails />
            <MovieSuggestions />
        </>
    )
}