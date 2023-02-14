import styled from "styled-components";

const StyledH2 = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-family: 'Abhaya Libre', serif;
  font-weight: 800;
  text-transform: uppercase;
`;

const StyledH3 = styled.h3`
  font-size: 1.2em;
  color: black;
  font-family: 'Abhaya Libre', serif;
  text-transform: uppercase;
`;

const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledPrecios = styled.p`
font-family: "Open Sans", sans-serif;
font-size: 1.5em;
font-weight: 600;
color: black;
`;

const StyledBOTON = styled.div`
  text-align: center;
  color: black;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  background-color: ${props => props.style.backgroundColor};
  color: ${props => props.style.color};
  width: 20rem;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1023px) {
    font-size: 1rem;
    width: 10rem;
    border-radius: 10px;
    padding: 0.5rem;
  }
  @media (max-width: 424px) {
    font-size: 0.75rem;
    width: 5rem;
    border-radius: 5px;
    padding: 0.25rem;
  }
`;

export { StyledH2, StyledH3, StyledInner, StyledBOTON, StyledPrecios };
