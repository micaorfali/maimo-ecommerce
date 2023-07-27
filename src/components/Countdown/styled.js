import styled from "styled-components";

const CountdownContainer = styled.div`
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Abhaya Libre", serif;
  font-weight: 800;
  margin-bottom: 2em;
}

.container p{
    font-size: 3vw;
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
  padding: 10px;
  background: linear-gradient(
    to top,
    #cacaca 0%,
    #cacaca 50%,
    #f0f0f0 50%,
    #f0f0f0 100%
  );

  .dias{
    font-size: 2vw;
  }
`;


export { CountdownContainer, CountdownNumber };