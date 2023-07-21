import { Link } from "react-router-dom";

export default function MovieCard() {
    return (
        <div className="movie-card">
            <div className="movie-card-body">
                <div className="movie-hover">

                    <Link to='/movie-details' className="movie-link">View Details</Link>
                </div>
                <div className="movie-poster">
                    <img src="assets/avengers.jpg" alt="Avengers" />
                </div>

                <span className="movie-year">2022</span>
                <span className="movie-rating">7</span>
            </div>
            <div className="movie-card-footer">
                <p>Avengers</p>
            </div>
        </div>

    )
}