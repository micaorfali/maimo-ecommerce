import styled from 'styled-components'

const Container = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #AC9EB8;
}

.navbarContainer{
text-align: right;
}

.navbarElements{
  display: inline-block;
}

.logoContainer{
  margin: 1em 2em;
  width: 10em;
  float: left;
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

`

export { Container }