import { useContext, useEffect, useState } from 'react';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LastAdded from '../components/LastAdded';
import '../scss/app.scss';
import MostDownLoads from '../components/MostDownloads';
import UpComing from '../components/UpComing';
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop';
import PageLoader from '../components/PageLoader';
import { useLoaderData, useNavigate, useNavigation, useOutletContext } from 'react-router-dom';
import { stateContext } from '../App';


export default function Home(props) {

    const { isLoading , setIsLoading  }= useOutletContext();

 
    return (
        <>

            <Hero />
            <Features />
            <LastAdded />
            <MostDownLoads />
            {/* <UpComing /> */}
        </>
    )
}