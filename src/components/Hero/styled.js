import styled from "styled-components";

const HeroContainer = styled.div`

.hero{
    width: 100%;
    height: auto;
}

.content {
    font-family: 'Abhaya Libre', serif;
        text-align:center;
        position: absolute;
        top: 30%;
        right: 15%;
        color: white;
    }

    h1, h2 {
        position: relative;
        margin: 0.25em;
    }

    p{
        font-size: 1.5em;
        font-family: "Open Sans", sans-serif;
        font-weight: lighter;
    }

    h1{
        font-weight: 800;
        font-size: 4em;
    }

    h2{
        font-weight: 500;
        font-size: 3.5em;

    }

    hr{
        border-top: none;
        width: 50%;
    }


    @media only screen and (min-width: 1024px) {
        h1, h2{
            font-size: 6em;
            
        } 

        p{
            font-size: 2em;
        }

        .content{
            right: 10%;
            top: 20%; 
        }

    }

    @media only screen and (max-width: 1023px) {
        h1, h2{
            font-size: 2em;
        } 
        p{
            font-size: 1em;
        }

    }


    @media only screen and (max-width: 767px) {
        .content{
            top: 20%;
            right: 10%
        }

    }

    @media only screen and (max-width: 424px) {
        .content{
            top: 15%;
            right: 10%
        }
        h1, h2{
            font-size: 1em;
        }
        p{
            max-width: 200px;
            font-size: 0.6em;
        }

    }

`


export {HeroContainer}