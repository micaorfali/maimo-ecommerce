import styled from "styled-components";

const CountdownContainer = styled.div`
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  font-weight: bold;
  font-family: "Abhaya Libre", serif;
  font-weight: 800;
}

.container p{
    font-size: 2vw;
}
  
`;

const CountdownNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  border-radius: 20%;
  background-color: #f0f0f0;
  margin: 5px;

  .dias{
    font-size: 2vw;
  }
`;


export { CountdownContainer, CountdownNumber };