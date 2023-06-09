import styled from "styled-components";

const Container = styled.div`
    .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    display: inline-block;
    border-radius: 20px;

  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 0 1em 2em 1em;
  }

  .fotoproducto{
    height: 10rem;
    width: auto;
  }

  .imgcontainer{
    margin: 1em auto;
    text-align: center;

  }

  .boton{
    text-align: center;
    padding: 1em 0.5em;
    background-color: palevioletred;
    margin-bottom: 1em;
    border-radius: 10px;
    
  }

  .boton a{
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
`

export {Container}
