import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Container } from '../CardContainer/styled'
import { Grid, Col } from '../Grid'
import { getFirestore } from '../../services/firebase'


const CardContainer = ({ catId }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const db = getFirestore();
                const productsCollection = db.collection(`products`)
                const productsSnapshot = catId ?
                await productsCollection.where('category', '==', catId).limit(20).get()
                :
                await productsCollection.orderBy('price', 'desc').limit(20).get();

                const products = productsSnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
                setLoading(false)
            } catch (error) {
                console.log('Error', error)
            }
        }

        getProducts()
    }, [catId])

    return (
        <Container className="contCard">
            
            {loading ? (<p> Loading</p>) :(
            <Grid rowGap={30} colGap={30}>
                {products.map(({ name, image, description, id }, index) =>
                    <Col desktop={3} tablet={6} mobile={12} key={index}>
                        <Card name={name} image={image} description={description} id={id} />
                    </Col>
                )}
            </Grid>
            )}

        </Container>
    )
}

export default CardContainer
