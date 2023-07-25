import { Link } from "react-router-dom";

export default function MovieCard(props) {
    const { movie } = props;

    // const movie = {
    //     title : 'Avengers' , 
    //     rating : 8  , 
    //     year : 2020 ,
    //     large_cover_image : 'assets/avengers.jpg'
    // } 

    return (
        <Link className="movie-card" to={`/movie-details/${movie.id}`}>
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