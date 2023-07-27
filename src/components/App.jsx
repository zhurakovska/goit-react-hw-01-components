import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import items from '../assets/transactions.json'

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import {Flex} from 'styles/GlobalStyles';


export const App = () => {
  return (
    <div>
      <Flex $justify='center' $items='center'>
        <Profile user ={user}/>
      </Flex>

      <Flex $justify='center' $items='center'>
        <Statistics title="Upload stats" stats = {data}/> 
      </Flex>
      <Flex $justify='center' $items='center'>
         <FriendList friends={friends}/>
      </Flex>

      <Flex $justify='center' $items='center'>
        <TransactionHistory items={items}/>
      </Flex>
    </div>
  );
};
