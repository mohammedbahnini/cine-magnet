import Slider from "react-slick";
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg';
import avatar from '../assets/avatar.jpg';

import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { SectionLoader } from "./SectionLoader";



export default function LastAdded(props) {

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
    const [lastAddedMovies, setlastAddedMovies] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

       // get last added movies
       axios.get('https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=date_added')
       .then((response) => {
           const { movies } = response.data.data;
           setlastAddedMovies(movies);
           setLoading(false);
       })
       .catch((error) => {
           console.log(error);
           setError(true);
           setLoading(false);
       });


    }, []);


    return (
        <section className="main-section last-added">
            <div className="container">

                <h2 className="main-section-title">Last Added</h2>

                {loading && <SectionLoader />}
                {error && <p>error while getting data</p>}

                {!error && !loading &&
                    <><Slider {...config} ref={slider} className="last-added-items">


                        {lastAddedMovies.map((movie, index) => {
                            return (
                                <MovieCard movie={movie} key={index} />
                            )
                        })}


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