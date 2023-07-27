import styled from 'styled-components';

const Container = styled.div`
.hero{
    width: 100vw;
}

.cardcont{
    margin: 2em;
}

.backgroundFP{
    background-color: #c8e1fb;
}

.FPImg{
    width: 100%;
    height: auto;
}

.SpotifyBkg{
    background-color: #C6F3B4;
}

.SpotifyBkg img{
    width: 100%;
    height: 100%;
}

.containerSubItemsTopArtist{
    margin: auto 0;
    display: block;
}

.countdownTS{
    background-color: rgba(225, 180, 105, 0.5);
}

.countdownTS img{
    max-width: 100%;
    height: 100%;
}


.feriaSwiftie img{
    width: 50vh;
    height: auto;
}

@media (max-width: 426px) {
    text-align: center;
}

`

export { Container}