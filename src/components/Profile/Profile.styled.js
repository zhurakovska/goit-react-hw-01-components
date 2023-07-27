import {styled} from 'styled-components'

export const Container = styled.div`
    width: 300px;
    padding: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#F0F0F0;
`;
export const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
`;

export const Tag = styled.p`
    font-size: 18px;
    color: #888;
`;

export const Location = styled.p`
    font-size: 16px;
    color: #666;
`;

export const List = styled.ul`
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
`;

export const ListItem = styled.li `
    display: flex;
    align-items: center;
    margin-top: 10px;

`;

export const StatLabel = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-right: 10px;
`;

export const StatQuantity = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #888;
`;
