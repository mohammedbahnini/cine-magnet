import { useEffect, useState } from "react";
import { useRef } from "react"
import { Link } from "react-router-dom";

export default function Hero() {
    const heroTitle = useRef(null);
    const heroText = useRef(null);
    const heroSearch = useRef(null);

    const [searchText , setSearchText ]= useState('')

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 1100);
                }
            });
        });
        observer.observe(heroTitle.current);
        observer.observe(heroText.current);
        observer.observe(heroSearch.current);

    }, []);

    return (
        <>
            <section className="hero">

                <div className="container">
                    <div className="content">

                        <h1 className="title" ref={heroTitle}>movie magnet</h1>

                        <p ref={heroText}>The best website for torrent movies , with good quality and small size .
                            <br />In addition there no ads out there .
                        </p>


                        <div className="search-container" ref={heroSearch}>

                            <input 
                            type="text" 
                            placeholder="Quick Search" 
                            className='search-input' 
                            value={searchText} 
                            onChange={(e)=>setSearchText(e.target.value)} />

                            <Link className="search-submit" to={`/all-movies?query=${searchText}`}>
                                <span>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span> Search
                            </Link>
                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}