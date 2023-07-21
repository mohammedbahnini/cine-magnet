import MovieCard from "./MovieCard";

export default function MoviesList() {
    return (


        <div className="movies-items">

            {
                [...Array(20)].map((item, index) => <MovieCard key={index} />)
            }


        </div>
    )
}