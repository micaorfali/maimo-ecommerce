import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import { Grid } from "../Grid";
import { Col } from "../Grid";
import { ColContainer } from "../Grid/styled";
import Countdown from "../Countdown/Countdown";
import { StyledLink } from "../Common/styled";
import { getFirestore } from "../../services/firebase";
import Loader from "../Loader/Loader";
import { BOTON, H2, H3, Precios } from "../Common/Common";
import { Container } from "./styled";
import bejeweled from "../../imgs/bejeweled.png"
import glitterrosa from "../../imgs/glitterrosa.jpg"
import diamondtay from "../../imgs/diamondtay.png"


const HomeContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
    
        // const docRef = doc(db, "products", "MLAAnTaZtpQ8af7IKSC1");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //   console.log("Doc data:", docSnap.data());
        // } else {
        //   console.log("doc doesn't exists");
        // }


        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`products`);
        const snapshot = await itemsCollection.get();
        const desiredId = "MLAAnTaZtpQ8af7IKSC1";
        const filteredItem = snapshot.docs.filter(doc => doc.id === desiredId)[0];
        setProduct(filteredItem.data());

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

  return (
    <div>
      <Hero />
      <Container>
      <div className="countdownTS">
        <Grid>
         <Col desktop="2" tablet="1" mobile="1"></Col> 
          <ColContainer desktop="4" tablet="5" mobile="5" style={{ display: 'flex', alignItems: 'flex-start', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
              <H3>COUNTDOWN</H3>
              <H2>TAYLOR EN ARGENTINA</H2>
              <Countdown/>
          </ColContainer>
          <Col desktop="2" tablet="1" mobile="null"></Col>
          <Col desktop="4" tablet="5" mobile="5">
            <div className="diamond">
              <img src={diamondtay} alt="Taylor con el Body de Argentina" />
            </div>
          </Col>
        </Grid>
      </div>

      <div style={{ backgroundImage: `url(${glitterrosa})` }}>
        <Grid>
        <ColContainer desktop="5" tablet="5" className="mapa">
          <div style={{height: '100%'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.203128921472!2d-58.42314402849174!3d-34.57125511036719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb573dc94c8a3%3A0x2b33a22ae2f00e96!2sPlaza%20Rep%C3%BAblica%20%C3%81rabe%20de%20Egipto!5e0!3m2!1ses-419!2sar!4v1686941895265!5m2!1ses-419!2sar" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de la ubicacion del evento. Plaza Egipto, Palermo"></iframe>
          </div>
          </ColContainer>
          <Col desktop="2" tablet="2"></Col>
          <ColContainer desktop="4" tablet="4" style={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center', marginBottom: '9em'}}>
              <H2>CONOCÉ NUESTRA FERIA SWIFTIE</H2>
              <H3>Próxima fecha: 6 de agosto</H3>
              <a href="https://www.instagram.com/feria.swiftie/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                <BOTON style={{ backgroundColor: "#133D65", color: "white" }}>
                  Más Información
                </BOTON>
              </a>
          </ColContainer>
        </Grid>
      </div>

      <div className="backgroundFP">
        <Grid>
          <Col>
            <H2>PRODUCTO DESTACADO</H2>
          </Col>
          <Col desktop="1" tablet="1" mobile="1"></Col>
          <Col desktop="5" tablet="5" mobile="10">
            <div style={{marginBottom: '2em'}}>
              <img
                className="FPImg"
                src={product.image}
                alt="Featured product"
              />
            </div>
          </Col>
          <Col desktop="1" tablet="1" mobile="1"></Col>
          <Col desktop="4" tablet="4" mobile="12">
            <div style={{marginBottom: '2em'}} className="productoDestacado">
            <H3>{product.name}</H3>
            <Precios>${product.price}</Precios>
            <StyledLink to="product/MLAAnTaZtpQ8af7IKSC1">
              <BOTON style={{ backgroundColor: "#133D65", color: "white" }}>
                Lo quiero!
              </BOTON>
          </StyledLink>
          </div>
          </Col>
          <Col desktop="1" tablet="1" mobile="1"></Col>
        </Grid>
      </div>
      <div className="SpotifyBkg">
        <Grid>
          <Col desktop="5" tablet="5">
            <img src={bejeweled} alt="Top Artist in Spotify 2022" />
          </Col>
          <Col desktop="2" tablet="2"></Col>
          <ColContainer desktop="4" tablet="4" style={{ display: 'flex', alignItems: 'center', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{margin: "2em 0"}}>
                <H2>SEGUÍ ESCUCHANDO MIDNIGHTS EN SPOTIFY</H2>
                <a href="https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=MFQVOBkQShmWL9w68i1Ydg" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                  <BOTON style={{ backgroundColor: "black", color: "white" }}>
                    Let's party
                  </BOTON>
                </a>
              </div>
          </ColContainer>
          <Col desktop="1" tablet="1"></Col>
        </Grid>
      </div>
      </Container>
    </div>
  );
};

export default HomeContainer;
