import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    ol {
    margin: 0;
    padding: 0;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }
`

export const Flex = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: ${props => props.$direction || 'row'};
    align-items: ${props => props.$items || 'stretch'};
    justify-content: ${props => props.$justify || 'stretch'};
`