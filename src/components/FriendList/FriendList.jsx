import React from 'react';

import { FriendListItem } from './FriendListItem';
import { ListContainer } from './FriendList.styled';

export const FriendList = ({friends}) => {
  return (
    <>
        <ListContainer>
            {friends.map(friend => <FriendListItem key = {friend.id} friend={friend}/>)}
        </ListContainer>
    </>
  )
}


