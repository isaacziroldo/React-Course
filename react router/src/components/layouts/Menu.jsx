import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (

    <aside className='Menu'>
        <nav>

            <ul>
                
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/param/OlaMundo'>Param #01</Link>
                </li>
                <li>
                    <Link to='/param/Teste'>Param #02</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/naoexiste'>naoexiste</Link>
                </li>
                
            </ul>

        </nav>
    </aside>
)

export default Menu