import React from 'react'
import './Home.css'
import Hero from '../imgs/hero-03.png'
import {H3} from '../components/Common/Common'
import CardContainer from '../components/CardContainer/CardContainer'


const Home = () => {
    return (
        <div>
            <img className="hero" src={Hero} alt="hero"/>
            <H3> Productos destacados</H3>
            <div className="cardcont">
                  <CardContainer /> 
            </div>
         
            
        </div>
    )
}

export default Home
