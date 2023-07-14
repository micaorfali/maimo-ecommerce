import styled from 'styled-components'

const CartIcon = styled.img`
  width: 25px; 
  height: auto;
  &:hover {
    filter: invert(66%) sepia(18%) saturate(281%) hue-rotate(229deg) brightness(95%) contrast(90%);;
  }
`;

const Container = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #AC9EB8;
}

.navbarContainer{
display: flex;
justify-content: flex-end;
}

.navbarElements{
  display: inline-flex;
}

.navbarElements img{
  width: 25px; 
  height: auto;
}


.logoContainer{
  margin: 0.8em 2em;
  width: 13em;
  float: left;
  display: flex;
}

.logoContainer img{
  align-self: center;
}

.logoContainer :first-child{
  width: 9em;
}

.logoContainer :nth-child(2){
    padding-left: 1em!important;
   
  }

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 1.5em 1em;
  text-decoration: none;
}

li a:hover {
  background-color: #0f1d28;
  color: #AC9EB8;
}

li:last-child{
  margin-right: 2em;
}


@media only screen and (max-width: 768px) {
  .logoContainer{
  width: 30vw;
}

.logoContainer :first-child{
  width: 25vw;
}

.logoContainer :nth-child(2){
    padding-left: 1vw!important;
    width: 10vw;
  }
}
`

export { Container, CartIcon }