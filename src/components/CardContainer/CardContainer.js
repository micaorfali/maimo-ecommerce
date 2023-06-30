import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Container } from '../CardContainer/styled'
import { Grid, Col } from '../Grid'
import { getFirestore } from '../../services/firebase'
import Loader from '../Loader/Loader'

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
                console.log(products);
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
            
            {loading ? (<Loader />) :( 
            <>
            <Grid rowGap={30} colGap={30}>
                {products.map(({ name, image, description, id, price }, index) =>
                    <Col desktop={4} tablet={6} mobile={12} key={index}>
                        <Card name={name} image={image} description={description} id={id} price={price}/>
                    </Col>
                )}
                
            </Grid>
            {products.length===0 && <p>No hay productos para esta categoria</p>} 
            </>
            )}

        </Container>
    )
}

export default CardContainer
