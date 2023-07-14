import styled from "styled-components";

const HeroContent = styled.div`
position: absolute;
  top: 30%;
  right: 15%;
  color: white;
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
    }

    h1, h2 {
        position: relative;
        margin: 0.25em;
    }

    p{
        font-size: 2vw;
        font-family: "Open Sans", sans-serif;
        font-weight: lighter;
    }

    h1{
        font-weight: 800;
        font-size: 4vw;
    }

    h2{
        font-weight: 500;
        font-size: 3.5vw;
    }

    hr{
        border-top: none;
        width: 50%;
    }


    @media only screen and (max-width: 768px) {
        .content{
            top: 10%;
            right: 10%
            position: relative;
        }

        p{
            font-size: 1.5vw;
        }
    }

    @media only screen and (max-width: 424px) {
        .content{
            top: 0%;
            right: 10%;
            position: relative;
        }
        h1, h2{
            font-size: 1vw;
        }
        p{
            max-width: 200px;
            font-size: 0.6vw;
        }
    }

`


export {HeroContainer, HeroContent}