import styled from "styled-components";

const Container = styled.div`
  .parent {
    background-color: #ac9eb8;
    color: black;
  }

  .container {
    padding: 1em 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .TSlogo {
    width: 10rem;
    display: inline-block;
    padding-right: 2em;
  }

  .TSlogo img {
    width: 100%;
    height: auto;
  }

  .containerIconsSM {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .containerIconsSM li:not(:last-child) {
    margin-right: 1em;
  }

  .followTS {
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }

  .followTS p{
    padding-bottom: 1em;
  }

  hr {
    display: block;
    color: black!important;
    border-top: black 1px solid;
    opacity: 0.5;
  }

  .copyright{
    padding: 1em 3em;
  }
`;
export { Container };