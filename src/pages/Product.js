import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {Product as ProductComp} from '../components/Product/Product'
import { useCartContext } from '../Contexts/CartContext'
import { getFirestore } from "../services/firebase";
import Loader from '../components/Loader/Loader'
import checkicon from "../imgs/checkicon.png";


const Product = () => {

    const { id: prodId } = useParams();

    const { addToCart } = useCartContext();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
  
    const addToCartWithFeedback = (product) => {
      addToCart(product);
      setShowNotification(product.name);
      setTimeout(() => {
          setShowNotification(false);
      }, 5000);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const db = getFirestore();
        try {
          const itemsCollection = db.collection(`products`);
          const itemSnapshot = await itemsCollection.doc(prodId).get();
          if (!itemSnapshot.exists) {
            console.log("No matching documents.");
            return;
          }
  
          setProduct({ id: itemSnapshot.id, ...itemSnapshot.data() });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [prodId]);
  
  
    return (
      <div>
        {showNotification && 
        <div style={{backgroundColor: "#C9ECC3", margin: "1em 2em", padding: "1em 2em"}}>
            <img src={checkicon} alt="icono Check" style={{width: "20px", height: "auto", marginRight: "10px"}}></img>
            {`PRODUCTO AGREGADO AL CARRITO: ${showNotification}`}
          </div>}
        {loading ? (
          <Loader/>
        ) : (
          <ProductComp
            prodId={prodId}
            product={product}
            addToCart={addToCartWithFeedback}
          />
        )}
      </div>
    );
  };

export default Product
