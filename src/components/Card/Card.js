import React from 'react'
import { Container } from '../Card/styled'
import FotoProducto from '../../imgs/top1.png'
import { Link } from 'react-router-dom'

const Card = ({ name, image, description, id }) => {
    return (
        <Container>
            <div className="card">
                <div className="imgcontainer">
                    <img src={image} alt="{name}" className="fotoproducto" />
                </div>
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{description} </p>
                    <div class="boton"><Link to={`product/${id}`}>View more</Link></div>
                </div>
            </div>
        </Container>
    )
}

export default Card
