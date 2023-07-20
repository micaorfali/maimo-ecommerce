import styled from "styled-components";

const Container = styled.div`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .background-general{
    background: rgba(172, 158, 184, 0.5);
    box-shadow: 2px 4px 6px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 1em 2em;
  }

  .background-general H3{
    text-align: center;
  }

.flexcart{
  display: flex;
  justify-content: space-between;
}

  .total{
    font-weight: bold;
    font-size: 1.5em;
    display: inline-flex;
    flex-direction: row;
    
  }

  .preciototal{
    text-align: right;
    font-weight: bold;
    font-size: 1.5em;
    display: inline-flex;
    flex-direction: row;

  .hr{
    border: 4px solid #000000;
  }

`;

export { Container };