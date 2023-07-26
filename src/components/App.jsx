import user from '../assets/user.json';
import data from '../assets/data.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
console.log(user)

export const App = () => {
  return (
    <div>
      <Profile user ={user}/>
      <Statistics title="Upload stats" stats = {data}/>
    </div>
  );
};
