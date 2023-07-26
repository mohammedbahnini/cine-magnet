import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function SearchSection() {

    const [searchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);


    const [searchText, setSearchText] = useState(params.query || '');
    const [quality, setQuality] = useState(params.quality || 'All');
    const [rating, setRating] = useState( params.rating || 'All');
    const [genre, setGenre] = useState(params.genre || 'All');
    const [sort , setSort] = useState( params.sort || 'date_added');
    const [order , setOrder] = useState(params.order || 'asc');

    // filters arrays 
    const qualities = ['All', '720p', '1080p', '2160p', '3D'];
    const ratings = ['All', '+9', '+8', '+7', '+6', '+5', '+4', '+3', '+2', '+1'];
    const genres = ['All', 'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Film Noir', 'Game Show', 'History', 'Horror', 'Music', 'Musical', 'Mystery',
        'News', 'Reality TV', 'Romance', 'Sci-Fi', 'Sport', 'Talk Show', 'Thriller', 'War', 'Western'];
    const sorts = [
        {
            text: 'Date added',
            value: 'date_added'
        } , 
        {
            text : 'Title' , 
            value : 'title'
        } , 
        {
            text : 'Year' , 
            value : 'year'
        } , 
        {
            text : 'Rating' , 
            value : 'rating'
        } 
    ];
    const orders = [
        {
            text : 'Ascending' , 
            value : 'asc'
        } , 
        {
            text : 'Descending' , 
            value : 'desc'
        }
    ];

    useEffect(() => {
        console.log(params);
        setSearchText(params.query || '');
    }, [params.query, params.page])

    return (
        <section className="search">

            <div className="container">

                <div className="search-container">
                    <div>
                        <input
                            type="text"
                            placeholder="Quick Search"
                            className='nav-search-input'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)} />

                    </div>

                    <div className="filters">


                        <div className="filter">
                            <h1 className="title">Quality</h1>

                            <div className="select-container">
                                <select value={quality}>
                                    {qualities.map((quality, index) => {
                                        return (
                                            <option value={quality} key={index}>{quality}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </div>

                        <div className="filter">
                            <h1 className="title">Rating</h1>

                            <div className="select-container">
                                <select value={rating} >
                                    {
                                        ratings.map((rating, index) => {
                                            return (
                                                <option value={rating} key={index}>{rating}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                        </div>




                        <div className="filter">
                            <h1 className="title">Genre</h1>

                            <div className="select-container">
                                <select value={genre}>
                                    {
                                        genres.map((genre, index) => {
                                            return (
                                                <option value={genre} key={index}>{genre}</option>
                                            )
                                        })
                                    }


                                </select>
                            </div>

                        </div>



                        <div className="filter">
                            <h1 className="title">Sort By</h1>

                            <div className="select-container">
                                <select value={sort}>
                                    {
                                        sorts.map( (sort , index)=>{
                                            return (
                                                <option value={sort.value} key={index}>{sort.text}</option>
                                            )
                                        })
                                    }


                                </select>
                            </div>

                        </div>



                        <div className="filter">
                            <h1 className="title">Order By</h1>

                            <div className="select-container">
                                <select value={order}>
                                    {
                                        orders.map( (item , index)=>{
                                            return (
                                                <option value={item.value}>{item.text}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                        </div>


                    </div>

                    <Link to={`/all-movies${searchText ? '?query=' + searchText : ''}` } className="search-btn" >
                        <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span> Search
                    </Link>

                </div>

            </div>


        </section>
    )
}