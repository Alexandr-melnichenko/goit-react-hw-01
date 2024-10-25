import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem'

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => {
        return (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li> );
})}
    </ul>
  );
};

export default FriendsList;
