import styled from "styled-components";

const Container = styled.div`


`;


const CustomButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#BABABA' : '#AC9EB8')};
  color: black;
  padding: 1rem;
  margin: 1em 1em 1em auto;
  border-radius: 20px;
  font-size: 1.5rem;
  width: 20rem;
  text-align: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1em;
  display: block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    filter: brightness(110%);
  }
`;

export { Container, CustomButton };