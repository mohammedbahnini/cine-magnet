import { useRef } from "react";
import Slider from "react-slick"

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
        arrows : false
    };



    return (
        <section className="main-section upcoming">
            <div className="container">
                <h1 className="main-section-title">UpComing Movies</h1>


                <Slider {...config} ref={slider} className="upcoming-items">


                    <div className="movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
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


                    <div className="last-added-item movie-card">
                        <div className="movie-card-body">
                            <div className="movie-hover">
                                <button className="movie-link">View Details</button>
                            </div>
                            <div className="movie-poster">
                                <img src="assets/batman.jpg" alt="Batman" />
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
                                <img src="assets/avatar.jpg" alt="Avatar" />
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