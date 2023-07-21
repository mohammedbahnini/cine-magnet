import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header(){
    return (
        <header>
        <div className="container">


            <nav>
                <a href="/" className="logo">
                    <img src={logo}  alt="CineMagnet" />
                </a>



                <ul>

                    <li>
                        <a href="/" className="link">
                            Home
                        </a>
                    </li>
                    <li>
                        <Link to="all-movies" className='link'>Browse All Movies</Link>
                    </li>
                </ul>

                
            </nav>

        </div>
    </header>
    )
}

;