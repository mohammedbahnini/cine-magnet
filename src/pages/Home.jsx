import { useEffect } from 'react';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LastAdded from '../components/LastAdded';
import '../scss/app.scss';
import MostDownLoads from '../components/MostDownloads';
import UpComing from '../components/UpComing';

export default function Home(){
    useEffect( ()=>{
        const header = document.querySelector('header');

        window.addEventListener("scroll", function (e) {
            if (window.scrollY >= 100)
                header.classList.add('scrolled');
            else
                header.classList.remove('scrolled');
        });


    
    },[]);

    
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <LastAdded />
                <MostDownLoads />
                <UpComing />
            </main>
        </>
    )
}