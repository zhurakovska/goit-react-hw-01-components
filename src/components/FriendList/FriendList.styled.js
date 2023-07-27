import {styled} from 'styled-components'
import { generateRandomColor } from '../../utils/generateRandomColor';

export const ListContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 250px;
    height: 60px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.bgColor || generateRandomColor()};
`;



export const AvatarImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin-right: 10px;
`;

export const FriendName = styled.p`
    font-size: 16px;
    font-weight: bold;
`;

export const Status = styled.span `
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 15px;
    width: 10px;
    height: 10px;
    background-color: ${props => props.$online ? '#4CAF50' : '#F44336'}
`