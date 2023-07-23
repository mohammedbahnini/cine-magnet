import { useEffect, useState } from 'react';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LastAdded from '../components/LastAdded';
import '../scss/app.scss';
import MostDownLoads from '../components/MostDownloads';
import UpComing from '../components/UpComing';
import axios from 'axios';

export default function Home() {

    useEffect( () => {
        // add event listener to the doc for nav styling
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
                <Hero />
                <Features />
                <LastAdded />
                <MostDownLoads />
                 {/* <UpComing /> */}
            </main>
        </>
    )
}