import Slider from "react-slick";
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg';
import avatar from '../assets/avatar.jpg';

import { useRef } from "react";
import MovieCard from "./MovieCard";



export default function LastAdded() {

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


    return (
        <section className="main-section last-added">
            <div className="container">

                <h2 className="main-section-title">Last Added</h2>

                <Slider {...config} ref={slider} className="last-added-items">



                    {
                        [...Array(8)].map((item, index) => <MovieCard key={index} />)
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


            </div>
        </section>
    )
}