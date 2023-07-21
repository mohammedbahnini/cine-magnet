export default function MovieDetails() {
    return (
        <section className="movie-wrapper">

            <div className="container">

                <div className="movie-poster">

                    <div className="movie-poster-wrapper">
                        <img src="assets/batman.jpg" alt="Batman" />
                    </div>


                </div>

                <div className="movie-details">

                    <div className="movie-title">
                        <h1 className="title">Batman</h1>
                        <span className="rating">7.0 <i className="fa-solid fa-star"></i></span>
                    </div>

                    <div className="movie-genres">
                        <p>Action / Drama / Thriller</p>
                    </div>

                    <div className="movie-year">
                        <p>2023</p>
                    </div>

                    <div className="movie-overview">
                        <h2 className="overview-title">Overview</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate natus voluptas amet saepe a eveniet repudiandae doloribus, quae veritatis beatae consequuntur ipsa consectetur inventore illo vero minus hic assumenda.</p>
                    </div>

                    <div className="movie-links">
                        <h2 className="title">Download Links</h2>

                        <div className="links">
                            <a href="#" className="download-links-item">
                                720p <i className="fa-solid fa-download"></i>
                            </a>
                            <a href="#" className="download-links-item">
                                1080p <i className="fa-solid fa-download"></i>
                            </a>
                            <a href="#" className="download-links-item">
                                3D <i className="fa-solid fa-download"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}