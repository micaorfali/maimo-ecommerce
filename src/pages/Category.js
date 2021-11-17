import React from 'react'
import { useParams } from 'react-router-dom'
import CardContainer from '../components/CardContainer/CardContainer';
import './Category.css'

const Category = () => {
    const { id: catId } = useParams();

    return (
        <div  className="marginproductos">
            <CardContainer catId={catId || null} />
        </div>
    )
}
export default Category
