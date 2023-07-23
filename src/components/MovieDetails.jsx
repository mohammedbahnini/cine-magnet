import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function MovieDetails() {

    const { movieId } = useParams();
    console.log(movieId);


    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true`)
            .then((response) => {
                console.log(response.data.data);
                const { movie } = response.data.data;
                setMovie(movie);
                setLoading(false);
                setError(null);

            })
            .catch((error) => {
                setLoading(false);
                setError('An error has occured !!');

            });
    }, []);

    return (
        <section className="movie-wrapper">

            <div className="container">
                {loading && !error && <p>Loading ...</p>}
                {error && !loading && <p>{error}</p>}
                {
                    !loading && !error &&
                    <>

                        <div className="movie-poster">

                            <div className="movie-poster-wrapper">
                                <img src={movie.large_cover_image} alt={movie.title} />
                            </div>


                        </div>

                        <div className="movie-details">

                            <div className="movie-title">
                                <h1 className="title">{movie.title}</h1>
                                <span className="rating">{movie.rating}<i className="fa-solid fa-star"></i></span>
                            </div>

                            <div className="movie-genres">
                                <p>{movie.genres.join(' / ')}</p>
                            </div>

                            <div className="movie-year">
                                <p>{movie.year}</p>
                            </div>

                            <div className="movie-overview">
                                <h2 className="overview-title">Overview</h2>
                                <p>{movie.description_intro}</p>
                            </div>

                            <div className="movie-links">
                                <h2 className="title">Download Links</h2>
                               
                                <div className="links">


                                {
                                    movie.torrents.map( (torrent , index)=>{
                                        return (
                                            <a href={torrent.url} className="download-links-item">
                                            {torrent.quality} <i className="fa-solid fa-download"></i>
                                        </a>
                                        )
                                    })
                                }


                                </div>
                            </div>
                        </div>                    </>
                }
            </div>
        </section>
    )
}