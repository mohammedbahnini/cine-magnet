import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header";
import {  useEffect, useLayoutEffect, useState } from "react";
import PageLoader from "../components/shared/PageLoader";



export default function Layout() {

    const [isLoading, setIsLoading] = useState(true);
    const { pathname , search } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
        //  // add event listener to the doc for nav styling

        const header = document.querySelector('header');

        const scrollEvent = function (e) {
            if (window.scrollY >= 100)
                header.classList.add('scrolled');
            else
                header.classList.remove('scrolled');
        };

        if (pathname.indexOf('/movie-details') == -1) {
            window.addEventListener("scroll", scrollEvent);
            header.classList.remove('scrolled');
        }
        else
            header.classList.add('scrolled');

        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }




    }, [pathname , search ]);

    // show the loading spinner 
    useLayoutEffect(() => {

        window.scrollTo(0, 0);
        setIsLoading(true);
        document.body.style.overflow = 'hidden';


        setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';

        }, 1000);


    }, [pathname , search ]);

    return (
        <>

            {isLoading && <PageLoader />}

            <>
                <Header className={[`scrolled`]} />
                <main>
                    <Outlet context={{ isLoading, setIsLoading }} />
                </main>
            </>


        </>
    )
}