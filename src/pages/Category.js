import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardContainer from "../components/CardContainer/CardContainer";
import "./Category.css";
import { H2 } from "../components/Common/Common";
import { Detalles } from "../components/Common/Common";
import { getFirestore } from "../services/firebase";

const Category = () => {
 // const { id: catId } = useParams();
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() =>{
  console.log(categoriaSeleccionada);
  }, [categoriaSeleccionada]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`categories`);
        const snapshot = await itemsCollection.get();

        const categoriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        categoriesData.sort((a, b)=>a.orden - b.orden)
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <H2>PRODUCTOS</H2>
      <div className="containerFilterSelector">
        <Detalles>Elegí un color para filtrar por Era</Detalles>

        <div className="filter-container">
        {categories.length > 0 && categories.map(( {id, name, clase }) => <div key={id} className={`filter-option ${clase}`} onClick={()=>setCategoriaSeleccionada(id)} ></div>)}
        </div>
      </div>

      <div className="marginproductos">
        <CardContainer catId={categoriaSeleccionada || null} />
      </div>
    </div>
  );
};
export default Category;
