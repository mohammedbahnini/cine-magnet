import { createContext, useContext, useReducer } from "react";
import MoviesList from "./MoviesList";
import Pagination from "./Pagination";
import { stateContext } from "../pages/Layout";


export default function MoviesSection() {
    const { state  } = useContext(stateContext);


    return (
       
            <section className="main-section  movies-wrapper">

                <div className="container">

                    <h1 className="main-section-title title">{state.totalMovies} movie found</h1>

                    <MoviesList  />
                    <Pagination />


                </div>

            </section>
     
    )
}