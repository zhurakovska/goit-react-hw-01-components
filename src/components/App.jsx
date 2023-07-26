import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import items from '../assets/transactions.json'
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile user ={user}/>
      <Statistics title="Upload stats" stats = {data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </div>
  );
};
