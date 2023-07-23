import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard";

export default function MovieSuggestions() {
    const { movieId } = useParams();

    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`)
            .then((response) => {
                const { movies } = response.data.data;
                setLoading(false);
                setError(null);
                setSuggestions(movies);
                console.log(movies);
            })
            .catch((error) => {
                setLoading(false);
                setError('An error has occured during request !');
            });
    }, []);
    return (
        <div className="suggestions main-section">
            <div className="container">
                <div className="main-section-title">Suggestions</div>
                {loading && !error && <p>Loading ...</p>}
                {error && !loading && <p>{error}</p>}
                {
                    !loading && !error &&
                    <div className="suggestions-items">

                        {
                            suggestions.map((movie, index) => {
                                return (
                                    <div className="last-added-item movie-card" key={index}>
                                        
                                        {/* <div className="movie-card-body">
                                            <div className="movie-hover">
                                                <button className="movie-link">View Details</button>
                                            </div>
                                            <div className="movie-poster">
                                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                                            </div>

                                            <span className="movie-year">{movie.year}</span>
                                            <span className="movie-rating">{movie.rating}</span>
                                        </div>
                                        <div className="movie-card-footer">
                                            <p>{movie.title}</p>
                                        </div> */}
                                    <MovieCard movie={movie} key={index} />
                                    </div>
                                )
                            })
                        }




                    </div>
                }

            </div>
        </div>
    )
}