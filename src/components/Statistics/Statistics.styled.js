import {styled} from 'styled-components'

import { generateRandomColor } from '../../utils/generateRandomColor';

export const StatisticsSection = styled.section`
  text-align: center;
`;

export const StatisticsTitle = styled.h2`
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;
export const StatItem = styled.li`
  flex: 1;
  margin: 5px;
  padding: 20px;
  background-color: ${props => props.bgColor || generateRandomColor()};
`;

export const StatLabel = styled.span`
display: block;
font-weight: bold;
margin-bottom: 5px;
`;
export const StatPercentage = styled.span`
font-size: 18px;
`;