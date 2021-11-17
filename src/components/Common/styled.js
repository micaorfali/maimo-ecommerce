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
    padding: 1em 0.5em;
    background-color: palevioletred;
    margin-bottom: 1em;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
`

export { StyledH3, StyledInner, StyledBOTON };