import { useContext, useEffect } from "react"

import MovieCard from '../shared/MovieCard';
import axios from "axios";
import { useSearchParams } from "react-router-dom";



export default function MoviesList(props) {

    const { movies } = props;
    console.log(props);

  

    return (

        <div className="movies-items">


            { movies &&
                movies.map( (movie ,index)=>{
                    return <MovieCard movie={movie} key={index}  />
                })
            }


        </div>
    )

}