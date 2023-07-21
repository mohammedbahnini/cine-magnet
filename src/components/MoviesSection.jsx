import MoviesList from "./MoviesList";
import Pagination from "./Pagination";

export default function MoviesSection() {
    return (
        <section className="main-section  movies-wrapper">

            <div className="container">

                <h1 className="main-section-title title">120 movie found</h1>

                <MoviesList />

                <Pagination />
            </div>

        </section>
    )
}