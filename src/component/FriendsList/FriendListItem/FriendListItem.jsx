import s from './FriendListItem.module.css';

const FriendsListItem = ({ friend }) => {
    return (
        <div className={s.cardFriends}>
        <img className={s.imageAvatar} src={friend.avatar} alt="Avatar" />
        <p className={s.friendName}>{friend.name}</p>
        <p className={s.friendStatus}>{friend.isOnline ? <span className={s.greenText}>Online</span> : <span className={s.redText}>Offline</span>}</p>
      </div>
    );
  };
  
  export default FriendsListItem;