import React, { useState, useEffect } from "react";
import { Box } from "./styled";
import CardContainer from "../CardContainer/CardContainer";
import { H2 } from "../Common/Common";
import { Detalles } from "../Common/Common";
import { getFirestore } from "../../services/firebase";
import Loader from "../Loader/Loader";


const CategoryContainer = () => {

  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [filtroHover, setFiltroHover] = useState("");


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

  if (loading) {
    return <Loader />;
  }

  const handleCategoriaSeleccionada = (id, name) => {
    if (categoriaSeleccionada === id) {
      setCategoriaSeleccionada('');
    } else {
      setCategoriaSeleccionada(id);
    }
    setFiltroHover(name);
  };

  return (
    
      <Box>
        <H2>PRODUCTOS</H2>
        <div className="containerFilterSelector">
          <Detalles>Elegí un color para filtrar por Era</Detalles>

          <div className="filter-container">
          {categories.length > 0 && categories.map(({ id, name, clase }) => (
              <div
                key={id}
                className={`filter-option ${clase} ${id === categoriaSeleccionada ? 'seleccionada' : ''}`}
                onClick={() => handleCategoriaSeleccionada(id, name)}
                onMouseEnter={() => setFiltroHover(name)}
                onMouseLeave={() => setFiltroHover("")}
                >
                  {filtroHover === name && <span className="filtro-hover">{name}</span>}
                </div>
                ))}
          </div>
        </div>

        <div className="marginproductos">
          <CardContainer catId={categoriaSeleccionada || null} />
        </div>
      </Box>
    
  );
};

export default CategoryContainer;
