import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { createContext, useEffect, useLayoutEffect, useReducer, useState } from "react";
import PageLoader from "../components/PageLoader";

// export const layoutContext = createContext();

// const initValue = {
//     loading: true
// }

// const reducer = (state, action) => {
//     return { ...state, ...action }
// }

export default function Layout() {

    //const [state, dispatch] = useReducer(reducer, initValue);

    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();


    useEffect(() => {

        //  // add event listener to the doc for nav styling
        //  const header = document.querySelector('header');
        //  window.addEventListener("scroll", function (e) {
        //      if (window.scrollY >= 100)
        //          header.classList.add('scrolled');
        //      else
        //          header.classList.remove('scrolled');
        //  });



    }, []);

    // show the loading spinner 
    useLayoutEffect(() => {

        setIsLoading(true);
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);

        setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';

        }, 1000);


    }, [pathname]);

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