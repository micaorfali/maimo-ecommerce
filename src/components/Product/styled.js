import styled from "styled-components";

const Container = styled.div`


img{
    max-width: 100%;
    height: auto;
}

.container{
    background-color: rgba(219, 157, 194, 0.5);
    margin: 0 2% 5em 2%;
    border-radius: 15px;

}

.ImgContainer{
    padding: 1em;
    text-align: center;
    height: auto;
    width: auto;
}

.ImgContainer img{
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
}


.data{
    padding: 1em 2em;
}

button{
    background-color: #AC9EB8;
    width: 2em;
    height: 2em;
    border-radius: 20px;
    margin-right: 10px;
}
span{
    margin-right: 10px;
}

.countContainer{
    margin: 1em 0;
}

.disabledButton {
  opacity: 0.5;
  cursor: not-allowed;
}

/* @media (max-width: 768px){
    .ImgContainer{
    height: 30vh;
    width: auto;
}

.ImgContainer img{
    max-width: 100%;
    height: auto;
}
} */

`


export {Container}