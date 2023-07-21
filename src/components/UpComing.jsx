import { useRef } from "react";
import Slider from "react-slick"
import MovieCard from "./MovieCard";

export default function UpComing() {

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
        <section className="main-section upcoming">
            <div className="container">
                <h1 className="main-section-title">UpComing Movies</h1>


                <Slider {...config} ref={slider} className="upcoming-items">


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