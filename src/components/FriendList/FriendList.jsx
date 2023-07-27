import React from 'react';

export const FriendList = (props) => {
    const {avatar, name, isOnline } = props.friends
  return (
    <>
        <ul className="friend-list">
            {props.friends.map(friend => 
            <li className="item" key = {friend.id}>
                <span className="status"></span>
                <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                <p className="name">{friend.name}</p>
            </li>)}
        </ul>
    </>
  )
}
