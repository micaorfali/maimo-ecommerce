import React from 'react'
import { StyledH2, StyledInner, StyledBOTON, StyledH3, StyledPrecios, StyledDetalles } from './styled'

const H2 = ({ children }) => {
    return (
        <StyledH2>
            {children}
        </StyledH2>
    )
}

const  H3 = ({ children }) => {
    return (
        <StyledH3>
            {children}
        </StyledH3>
    )
}

const Precios = ({ children}) => {
    return (
        <StyledPrecios>
            {children}
        </StyledPrecios>
    )
}

const BOTON = ({ children, style }) => {
    return (
    <StyledBOTON style={style}>
        {children}
    </StyledBOTON>
)
    }

const Detalles = ({ children }) => {
    return (
        <StyledDetalles>
            {children}
        </StyledDetalles>
    )
}



const Inner = ({ children }) => <StyledInner>{children}</StyledInner>


export { H2, H3, Inner, BOTON, Precios, Detalles }