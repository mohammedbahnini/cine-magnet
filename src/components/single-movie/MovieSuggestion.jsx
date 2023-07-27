import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import MovieCard from "../shared/MovieCard";

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