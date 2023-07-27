import styled from "styled-components";

const HeroContent = styled.div`
position: absolute;
  top: 20%;
  right: 15%;
  color: white;


  @media (max-width: 769px){
    top: 15%;
    right: 10%;
  }

  @media (max-width: 426px){
    /* top: 15%;
    right: 10%; */
    p{
        display: none;
    }
  } 
`;

const HeroContainer = styled.div`

.hero{
    width: 100%;
    height: auto;
}

.content {
    font-family: 'Abhaya Libre', serif;
        text-align:center;
        color: white;
        max-width: 50vw;
    }

    .content img{
        padding-right: 0.5em;
    }

    h1, h2 {
        position: relative;
        margin: 0.25em 0;
    }

    p{
        font-size: 1.2vw;
        font-family: "Open Sans", sans-serif;
        font-weight: lighter;
        max-width: 75%;
        margin: 0 auto; 
    }

    h1{
        font-weight: 800;
        font-size: 4vw;
    }

    h2{
        font-weight: 500;
        font-size: 3vw;
    }

    h3{
        font-weight: 500;
        font-size: 2vw;
    }

    hr{
        border-top: none;
        width: 50%;
    }


    @media only screen and (max-width: 768px) {
        .content{
            top: 10%;
            right: 10%;
            position: relative;
        }

        .content img{
            width: 8vw;
        }

        p{
            font-size: 1.8vw;
        }
    }

    @media only screen and (max-width: 769px){
        .content{
            right: 0;
        }
    }

    @media only screen and (max-width: 424px) {
        .content{
            top: 0%;
            right: 10%;
            position: relative;
        }
        .content img{
            width: 5vw;
        }
    }

`


export {HeroContainer, HeroContent}