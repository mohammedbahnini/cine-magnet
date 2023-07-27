import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function SearchSection() {

    const [searchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    const { page } = params;


    const [searchText, setSearchText] = useState(params.query || '');
    const [quality, setQuality] = useState(params.quality || 'all');
    const [rating, setRating] = useState(params.raing || '0');
    const [genre, setGenre] = useState(params.genre || 'all');
    const [sort, setSort] = useState(params.sort || 'date_added');
    const [order, setOrder] = useState(params.order || 'asc');

    // filters arrays 
    const qualities = ['all', '720p', '1080p', '2160p', '3D'];
    const ratings = [
        {
            text: 'All',
            value: 0
        },
        {
            text: '+1',
            value: 1
        },
        {
            text: '+2',
            value: 2
        },
        {
            text: '+3',
            value: 3
        },
        {
            text: '+4',
            value: 4
        },
        {
            text: '+5',
            value: 5
        },
        {
            text: '+6',
            value: 6
        },
        {
            text: '+7',
            value: 7
        },
        {
            text: '+8',
            value: 8
        },
        {
            text: '+9',
            value: 9
        }
    ];
    const genres = ['all', 'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary',
        'Drama', 'Film Noir', 'Game Show', 'History', 'Horror', 'Music', 'Musical', 'Mystery',
        'News', 'Reality TV', 'Romance', 'Sci-Fi', 'Sport', 'Talk Show', 'Thriller', 'War', 'Western'];
    const sorts = [
        {
            text: 'Date added',
            value: 'date_added'
        },
        {
            text: 'Title',
            value: 'title'
        },
        {
            text: 'Year',
            value: 'year'
        },
        {
            text: 'Rating',
            value: 'rating'
        }
    ];
    const orders = [
        {
            text: 'Ascending',
            value: 'asc'
        },
        {
            text: 'Descending',
            value: 'desc'
        }
    ];

    // useEffect(() => {
    //     console.log(params);
       
    // }, [searchText , quality , rating , sort , order ])

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
                                <select onChange={e => setQuality(e.target.value)}>
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
                                <select onChange={e => setRating(e.target.value)} >
                                    {
                                        ratings.map((rating, index) => {
                                            return (
                                                <option value={rating.value} key={index}>{rating.text}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                        </div>




                        <div className="filter">
                            <h1 className="title">Genre</h1>

                            <div className="select-container">
                                <select onChange={e=>setGenre(e.target.value)}>
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
                                <select onChange={e=>setSort(e.target.value)}>
                                    {
                                        sorts.map((sort, index) => {
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
                                <select onChange={e=>setOrder(e.target.value)}>
                                    {
                                        orders.map((item, index) => {
                                            return (
                                                <option value={item.value} key={index}>{item.text}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                        </div>



                    </div>


                    <Link
                        to={`/all-movies?query=${searchText}&page=${page || 1}&sort=${sort}&order=${order}&quality=${quality}&genre=${genre}&rating=${rating}`}
                        className="search-btn" >
                        <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span> Search
                    </Link>

                </div>

            </div>


        </section>
    )
}