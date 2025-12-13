import './style.css'
import logo from '../../../assets/images/home/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to="/"><img src={logo} alt="" /></Link>
            <nav className='nav-header'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/design">Design</Link></li>
                    <li><Link to="/site">Site</Link></li>
                    <li><Link to="/ia">Ia</Link></li>
                </ul>
            </nav>
            <a className='btn-header'href="">Diagnóstico</a>
        </header>

    )
}