import React, { useState } from 'react'
import { Container} from './styled'
import { Grid, Col } from '../Grid'
import { BOTON } from '../Common/Common'

const Product = ({product, addToCart }) => {
    return (
        <Container>
            <Grid>
                <Col desktop={6} tablet={6} mobile={12}>
                    <img src={product.image} alt={product.name}></img>
                </Col>
                <Col desktop={6} tablet={6} mobile={12}>
                    <div className="data">
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <BOTON><div onClick={() => addToCart({ ...product, quantity: 1 })}>Add to cart</div></BOTON>
                    </div>
                </Col>
            </Grid>
        </Container>
    )
}


export { Product }
