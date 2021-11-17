import styled from 'styled-components'

const Container = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
}

li {
  float: left;
 
}

.primerli{
  display: inline-block;
  margin-left: 2em;
  width: 4em;
}

.segundoLi{
  margin-left: 2em;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 1.5em 1em;
  text-decoration: none;
}

li a:hover {
  background-color: #eaea;
}

`

export { Container }