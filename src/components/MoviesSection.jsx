import { createContext, useContext, useEffect, useReducer, useState } from "react";
import MoviesList from "./MoviesList";
import Pagination from "./Pagination";
import { useOutletContext, useSearchParams } from "react-router-dom";
import axios from "axios";
import { SectionLoader } from "./SectionLoader";


export default function MoviesSection() {

    const { setIsLoading } = useOutletContext();

    const [state, setState] = useState({
        movies: [],
        totalMovies: 0,
        currentPage: 1,
        moviesPerPage: 20,
        pages: 20,
        pagesToShow: 4,
        loading: true
    })
    const [searchParams, setsearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    console.log(params);
    const { query , page , sort , order , genre , quality , rating }= params;


    useEffect(() => {


        setState((prev) => {
            return { ...prev, loading: true }
        });


        const { moviesPerPage } = state;
        //const link = `https://yts.mx/api/v2/list_movies.json?page=${params.page || 1}&query_term=${params.query || ''}`;
        const link = `https://yts.mx/api/v2/list_movies.json?page=${page || 1}&limit=20&query_term=${query || ''}&quality=${quality}&minimum_rating=${rating}&genre=${genre}&sort_by=${sort}&order_by=${order}`;
        
        console.log('link ',link);
        axios.get(link)
            .then((response) => {

                const { movies, page_number, movie_count } = response.data.data;
                const pages = Math.ceil(movie_count / moviesPerPage);

                setTimeout(() => {

                    setState((prev) => {
                        return {
                            ...prev,
                            movies,
                            currentPage: page_number,
                            totalMovies: movie_count,
                            pages,
                            loading: false
                        }
                    })

                }, 100);

            });
    }, [ query, page , rating , sort , quality , order ]);

    return (

        <section className="main-section  movies-wrapper">

            <div className="container">

                {state.loading && <SectionLoader />}



                {!state.loading &&
                    <>
                        <h1 className="main-section-title title">{state.totalMovies} movie found</h1>

                        <MoviesList movies={state.movies} currentPage={state.currentPage} moviesPerPage={state.moviesPerPage} />
                        <Pagination pages={state.pages} currentPage={state.currentPage} pagesToShow={state.pagesToShow} querySearch={params.query || ''} />
                    </>
                }



            </div>

        </section>

    )
}