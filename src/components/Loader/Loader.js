import React from "react";
import loaderMirrorball from "../../imgs/loader-mirrorball.gif";
import { Container } from "./styled";

const Loader = () => {
  return (
    <Container>
      <div className="loading">
        <img src={loaderMirrorball} alt="Mirrorball Loader" />
      </div>
    </Container>
  );
};

export default Loader;
