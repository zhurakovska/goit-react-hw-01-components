import {styled} from 'styled-components'

export const Container = styled.table`
    width: 50%; 
    border-collapse: collapse;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
`;

export const Header = styled.th`
    padding: 12px;
    font-size: 16px;
    text-align: left;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
`;

export const Cell = styled.td`
    padding: 12px;
    font-size: 14px;
    border-bottom: 1px solid #e0e0e0;
    border: 1px solid #ccc;
    background-color: ${props => props.isEvenRow ? '#fffff' : '#e6f7ff'};
`;