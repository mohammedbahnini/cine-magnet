import { useEffect } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import MoviesSection from "../components/MoviesSection";
import '../scss/all-movies.scss';

export default function AllMovies() {

    useEffect(() => {
        const header = document.querySelector('header');

        window.addEventListener("scroll", function (e) {
            if (window.scrollY >= 100)
                header.classList.add('scrolled');
            else
                header.classList.remove('scrolled');
        });

    }, []);

    return (
        <>
            <Header />
            <main>

                <SearchSection />
                <MoviesSection />
            </main>
        </>
    )
}