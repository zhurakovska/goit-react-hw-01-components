import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle

export const Flex = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: ${props => props.$direction || 'row'};
    align-items: ${props => props.$items || 'stretch'};
    justify-content: ${props => props.$justify || 'stretch'};
`