import styled from "styled-components";

const Box = styled.div`
    .marginproductos{
        margin: 2em;
    }

    .containerFilterSelector{
        margin: 1em 3em;
    }

    .filter-container{
        display: flex;
        margin-top: 1em;
        margin-bottom: 1em;
        justify-content: space-between;
    }

    .filter-option{
        width: 3em;
        height: 3em;
        border-radius: 50%;
        cursor: pointer;
        border: white 3px solid;
        
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .filtro-hover{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.6em;
        width: 100%;
        text-align: center;
        padding: 0.5em 0;
    }

    .TSEra{
        background-color: #095848;
    }

    .Fearless{
        background-color: #E1B469;
    }

    .SpeakNow{
        background-color: #62286D;
    }

    .Red{
        background-color: #830D22;
    }

    .Era1989{
        background-color: #4E9AB2;
    }

    .Reputation{
        background-color: #474747;
    }

    .Lover{
        background-color: #DB9DC2;
    }

    .Folklore{
        background-color: #888888;
    }

    .Evermore{
        background-color: #D1BB9C;
    }

    .Midnights{
        background-color: #133D65;
    }

    .TheErasTour{
        background: conic-gradient(from 180deg at 50% 50%, #133D65 0deg, #095848 30.44deg, #E1B469 60.98deg, #62286D 97deg, #830D22 138.25deg, #4E9AB2 185.13deg, #474747 226.74deg, #DB9DC2 268.7deg, #888888 297.12deg, #D1BB9C 325.32deg, #133D65 360deg);;
    }


    .seleccionada{
        border: black 3px solid;
    }

    .selected {
        opacity: 0.5;
        position: relative;
    }


    .containerDetalle{
        display: flex;
    }

    .containerDetalle img{
        max-width: 100%;
        max-height: 100%;
    }

    .containerDetalle hr{
        width: 100%;
    }

    @media (max-width: 426px) {
        .containerFilterSelector{
            margin: 1em!important;
        }

        .filter-option{
            border-radius: 30%;
        }

        .contCard{
            margin: 0!important;
        }
    }

`

export { Box }