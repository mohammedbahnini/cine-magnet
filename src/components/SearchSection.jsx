export default function SearchSection() {
    return (
        <section className="search">

            <div className="container">

                <div className="search-container">
                    <div>
                        <input type="text" placeholder="Quick Search" className='nav-search-input' />

                    </div>

                    <div className="filters">


                        <div className="filter">
                            <h1 className="title">Quality</h1>

                            <div className="select-container">
                                <select name="genre" id="genre">
                                    <option value="">All</option>
                                    <option value="">720p</option>
                                    <option value="">1080p</option>
                                    <option value="">2160p</option>
                                    <option value="">3D</option>
                                </select>
                            </div>

                        </div>

                        <div className="filter">
                            <h1 className="title">Rating</h1>

                            <div className="select-container">
                                <select name="genre" id="genre">
                                    <option value="">All</option>
                                    <option value="">9</option>
                                    <option value="">8</option>
                                    <option value="">7</option>
                                    <option value="">6</option>
                                    <option value="">5</option>
                                    <option value="">4</option>
                                    <option value="">3</option>
                                    <option value="">2</option>
                                    <option value="">1</option>
                                </select>
                            </div>

                        </div>




                        <div className="filter">
                            <h1 className="title">Genre</h1>

                            <div className="select-container">
                                <select name="genre" id="genre">
                                    <option value="all">All</option>
                                    <option value="action">Action</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="animation">Animation</option>
                                    <option value="biography">Biography</option>
                                    <option value="comedy">Comedy</option>
                                    <option value="crime">Crime</option>
                                    <option value="documentary">Documentary</option>
                                    <option value="drama">Drama</option>
                                    <option value="film-noir">Film Noir</option>
                                    <option value="game-show">Game Show</option>
                                    <option value="history">History</option>
                                    <option value="horror">Horror</option>
                                    <option value="music">Music</option>
                                    <option value="musical">Musical</option>
                                    <option value="mystery">Mystery</option>
                                    <option value="news">News</option>
                                    <option value="reality-tv">Reality TV</option>
                                    <option value="romance">Romance</option>
                                    <option value="sci-fi">Sci-Fi</option>
                                    <option value="sport">Sport</option>
                                    <option value="talk-show">Talk Show</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="war">War</option>
                                    <option value="western">Western</option>
                                </select>
                            </div>

                        </div>







                        <div className="filter">
                            <h1 className="title">Order by</h1>

                            <div className="select-container">
                                <select name="genre" id="genre">
                                    <option value="">Date added</option>
                                    <option value="">Title</option>

                                    <option value="">Year</option>
                                    <option value="">Rating</option>
                                    <option value="">Peers</option>
                                    <option value="">Seeds</option>
                                    <option value="">Downloads</option>

                                </select>
                            </div>

                        </div>



                        <div className="filter">
                            <h1 className="title">Sort</h1>

                            <div className="select-container">
                                <select name="genre" id="genre">
                                    <option value="">Ascending</option>
                                    <option value="">Descending</option>
                                </select>
                            </div>

                        </div>


                    </div>

                    <button>
                        <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span> Search
                    </button>

                </div>

            </div>


        </section>
    )
}