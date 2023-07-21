import Slider from "react-slick";
import avengers from '../assets/avengers.jpg';
import batman from '../assets/batman.jpg';
import avatar from '../assets/avatar.jpg';

import { useRef } from "react";



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
        arrows : false
    };


    return (
        <section className="main-section last-added">
            <div className="container">

                <h2 className="main-section-title">Last Added</h2>

                <Slider {...config} ref={slider} className="last-added-items">


                    <div className="last-added-item movie-card">
                        <a href="#" className="movie-card-body">

                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>

                            <div className="movie-poster">
                                <img src={avengers} alt="Avengers" />
                            </div>

                            <span className="movie-year">2022</span>
                            <span className="movie-rating">7</span>
                        </a>

                        <div className="movie-card-footer">
                            <p>Avengers</p>
                        </div>

                    </div>


                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src={batman} alt="Batman" />
                            </div>

                            <span className="movie-year">2022</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>The Batman</p>
                        </div>
                    </div>



                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">

                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src={avatar} alt="Avatar" />
                            </div>

                            <span className="movie-year">2022</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Avatar</p>
                        </div>
                    </div>


                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">

                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                            </div>

                            <span className="movie-year">2018</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Aquaman</p>
                        </div>
                    </div>


                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                            </div>

                            <span className="movie-year">2018</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Aquaman</p>
                        </div>
                    </div>



                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                            </div>

                            <span className="movie-year">2018</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Aquaman</p>
                        </div>
                    </div>



                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                            </div>

                            <span className="movie-year">2018</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Aquaman</p>
                        </div>
                    </div>




                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/aquaman.jpg" alt="Aquaman" />
                            </div>

                            <span className="movie-year">2018</span>
                            <span className="movie-rating">7</span>
                        </div>
                        <div className="movie-card-footer">
                            <p>Aquaman</p>
                        </div>
                    </div>



                </Slider>

                <div className="arrows">
                    <button className="prev" 
                    onClick={()=> slider.current.slickPrev()}>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button className="next" 
                    onClick={()=> slider.current.slickNext()}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>


            </div>
        </section>
    )
}