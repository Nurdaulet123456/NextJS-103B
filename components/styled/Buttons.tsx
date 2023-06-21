import styled from "@emotion/styled";

interface IPrimaryButton {
    color?: string 
    radius?: string
}

export const PrimaryButton = styled.button<IPrimaryButton>`
    padding: 10px 40px;
    cursor: pointer;
    border: none;
    background-color: ${props => props.color};
    color: black;
    font-family: sans-serif;
    font-weight: bold;
    border-radius: ${props => props.radius};
`

// CTRL + Ё



// Primary and Outline