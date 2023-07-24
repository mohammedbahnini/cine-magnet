import { useContext, useEffect } from "react"

import MovieCard from '../components/MovieCard';
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { stateContext } from "../pages/Layout";


export default function MoviesList(props) {
    const { state , dispatch } = useContext(stateContext);
    const { movies , moviesPerPage  } = state;

    const [ searchParams , setsearchParams ] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);


    useEffect( ()=>{
        axios.get(`https://yts.mx/api/v2/list_movies.json?page=${params.page || 1}&query_term=${params.query || ''}`)
                .then( (response)=>{
                    
                    const { movies , page_number , movie_count } = response.data.data ; 
                    const pages = Math.ceil( movie_count / moviesPerPage);
    
                    dispatch({
                        movies  , 
                        currentPage : page_number , 
                        totalMovies : movie_count , 
                        pages 
                    });   
                  


                });
    } , [state.currentPage , params.page, params.query ]);

    return (

        <div className="movies-items">


            {
              
                movies.map( (movie ,index)=>{
                    return <MovieCard movie={movie} key={index} />
                })
            }


        </div>
    )
}