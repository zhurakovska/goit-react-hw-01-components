import React from 'react'
import PropTypes from 'prop-types'

import {ListItem, AvatarImage, FriendName, Status} from './FriendList.styled';

export const FriendListItem = ({friend}) => {
  return (
            
            <ListItem> 
                <Status $online = {friend.isOnline} ></Status>    
                <AvatarImage src={friend.avatar} alt="User avatar" width="48" />
                <FriendName>{friend.name}</FriendName>
            </ListItem>
  )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar:  PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }) 
}


