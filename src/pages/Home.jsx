import Features from '../components/Features';
import Hero from '../components/Hero';
import LastAdded from '../components/LastAdded';
import '../scss/app.scss';
import MostDownLoads from '../components/MostDownloads';


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