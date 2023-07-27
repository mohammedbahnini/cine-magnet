import { useEffect, useRef, useState } from "react";
import Slider from "react-slick"
import MovieCard from "../shared/MovieCard";
import axios from "axios";
import SectionLoader from "../shared/SectionLoader";
export default function MostDownLoads() {

    const slider = useRef(null);

    const config = {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            ,
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

        ],
        arrows: false
    };



    // data about movies
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // get last added movies
        axios.get('https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=download_count&order_by=desc')
            .then((response) => {

                const { movies } = response.data.data;
                setMovies(movies);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
                setLoading(false);
            });


    }, []);



    return (
        <section className="main-section most-downloads">

            <div className="container">
                <h1 className="main-section-title">Most Downloads</h1>

                {loading && <SectionLoader />}
                
                {error && <p>An error has occured !</p>}

                {!loading && !error &&
                    <>

                        <Slider {...config} ref={slider} className="most-downloads-items">

                            {
                                movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
                            }


                        </Slider>

                        <div className="arrows">
                            <button className="prev"
                                onClick={() => slider.current.slickPrev()}>
                                <i className="fa-solid fa-arrow-left-long"></i>
                            </button>
                            <button className="next"
                                onClick={() => slider.current.slickNext()}>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </div>
                    </>

                }





            </div>
        </section>
    )
}