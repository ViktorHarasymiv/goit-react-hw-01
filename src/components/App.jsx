/* STYLE */
import './App.css'

/* JSON FILE */
import userData from '../components/Profile/userData.json'
import friendsData from '../components/FriendList/friendsData.json'
import transactions from '../components/Transaction/transactionHistory.json'

/* COMPONENTS */
import Profile from './Profile/Profile'
import FriendList from './FriendList/FriendList'
import Transaction from './Transaction/Transaction'

function App() {

  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friendsData}/>
    <Transaction transaction={transactions} />
    </>
  );
};

export default App