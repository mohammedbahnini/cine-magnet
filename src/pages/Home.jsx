import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import LastAdded from '../components/home/LastAdded';
import MostDownLoads from '../components/home/MostDownloads';
import '../scss/app.scss';



export default function Home(props) {

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