import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Img,
  Tag,
  UserName,
  Location,
  List,
  ListItem,
  StatLabel,
  StatQuantity
} from './Profile.styled';

export const Profile = (props) => {
    const {username,tag,location,avatar,stats} = props.user
  return (
    <>
        <Container>
        <div>
            <Img
            src={avatar}
            alt={tag}
            />
            <UserName>{username}</UserName>
            <Tag>{tag}</Tag>
            <Location>{location}</Location>
        </div>

        <List>
            <ListItem>
              <StatLabel>Followers</StatLabel>
              <StatQuantity>{stats.followers}</StatQuantity>
            </ListItem>
            <ListItem>
              <StatLabel>Views</StatLabel>
              <StatQuantity>{stats.views}</StatQuantity>
            </ListItem>
            <ListItem>
              <StatLabel>Likes</StatLabel>
              <StatQuantity>{stats.likes}</StatQuantity>
            </ListItem>
        </List>
        </Container>
    </>
  )
}

Profile.propTypes = {
	user:PropTypes.shape({
			username:  PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

      stats:	PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
		})
}