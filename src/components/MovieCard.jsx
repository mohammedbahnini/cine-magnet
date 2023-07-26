import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
    const { movie , index } = props;
    const card = useRef(null);
    
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.map(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('shown');
                 
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(card.current);

    }, []);
    return (
        <Link className="movie-card" to={`/movie-details/${movie.id}`} ref={card} >
            <div className="movie-card-body"  >
                <div className="movie-hover">

                    <Link to={`/movie-details/${movie.id}`} className="movie-link">View Details</Link>
                </div>
                <div className="movie-poster">
                    <img src={movie.large_cover_image || movie.medium_cover_image} alt="Avengers" />
                </div>

                <span className="movie-year">{movie.year}</span>
                <span className="movie-rating">{movie.rating}</span>
            </div>
            <div className="movie-card-footer">
                <p>{movie.title}</p>
            </div>
        </Link>

    )
}