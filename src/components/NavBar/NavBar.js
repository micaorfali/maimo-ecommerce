import React, {useState} from 'react'
import { Container } from './styled'
import {Link} from 'react-router-dom'
import logo from '../../imgs/stopit-logo-02.png'
import { getFirestore } from '../../services/firebase'

const NavBar = () => {
    return (
        <Container>
            <ul>
                <li className="primerli"><img src={logo} alt='logo stop it!' width='100%'/></li>
                <li className="segundoLi"><Link to='/'>Home</Link></li>
                <li> <Link to='/shop'> Shop </Link> </li>
                <li><Link to='/checkout'>Cart </Link></li>
            </ul>
        </Container>
    )
}

export default NavBar
