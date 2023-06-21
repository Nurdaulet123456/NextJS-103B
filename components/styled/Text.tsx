import styled from '@emotion/styled'

interface IBoldText {
    color?: string
    size?: string
}

export const BoldText = styled.div<IBoldText>`
    color: ${props => props.color};
    font-weight: bold;
    font-size: ${props => props.size};
    font-family: sans-serif;
    margin-top: 20px;
`