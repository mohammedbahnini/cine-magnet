import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

export default function Header(props){
    const [ theme , setTheme] = useState(localStorage.getItem('theme') || 'light')
    ;
    
    const changeTheme  = ()=> {
        localStorage.setItem('theme' ,  theme === 'light' ? 'dark' : 'light')
        setTheme(localStorage.getItem('theme'))
    }

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
                    {/* <li>
                        <button className='change-theme-btn' onClick={changeTheme}>Swith To {theme}</button>
                    </li> */}
                
                </ul>

                
            </nav>

        </div>

    </header>
    )
}

;