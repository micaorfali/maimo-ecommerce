import styled from "styled-components";

const StyledH3 = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledBOTON = styled.div`
    text-align: center;
    color: black;
    padding: 1rem;
    background-color: #AC9EB8;
    margin: 0 auto;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    width: 20rem;
    text-align: center;

    @media (max-width: 1023px){
      font-size: 1rem;
      width: 10rem;
      border-radius: 10px;
      padding: 0.5rem;
    }
    @media (max-width: 424px){
      font-size: 0.75rem;
      width: 5rem;
      border-radius: 5px;
      padding: 0.25rem;
    }

`

export { StyledH3, StyledInner, StyledBOTON };