import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header(props){
    const { className } = props;
    const { pathname } = useLocation();

    return (
        <header className={'scrolled'}>
        <div className="container">


            <nav>
                <Link to={'/'} className="logo">
                    <img src={logo}  alt="CineMagnet" />
                </Link>



                <ul>

                    <li>
                        <Link to={'/'} className="link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/all-movies" className='link'>Browse All Movies</Link>
                    </li>
                </ul>

                
            </nav>

        </div>
    </header>
    )
}

;