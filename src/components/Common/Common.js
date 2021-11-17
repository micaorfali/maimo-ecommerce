import React from 'react'
import { StyledH3, StyledInner, StyledBOTON } from './styled'

const H3 = ({ children }) => {
    return (
        <StyledH3>
            {children}
        </StyledH3>
    )
}

const BOTON = ({ children }) => {
    return (
    <StyledBOTON>
        {children}
    </StyledBOTON>
)
}


const Inner = ({ children }) => <StyledInner>{children}</StyledInner>
export { H3, Inner, BOTON }