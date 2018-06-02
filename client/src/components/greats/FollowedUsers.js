import React from 'react';
import { HeaderStyle, NoFollowedUsers } from '../../theme/style';
import GreatComponent from './GreatComponent';

const FollowedUsers = ({users}) => {

  const hasFollowedUsers = users && users.length >= 1

  const followedUsers = users.map((great, index) => {
    return (
      <div key={index}>
        <GreatComponent great={great} />
      </div>
    )
  })

  const noFollowedUsers = (
    <NoFollowedUsers>
      Get started by following some users
      <br />
      <br />
      <a href="/main"><button>All</button></a>
    </NoFollowedUsers>
  )

  return(
    <div>
      <HeaderStyle>
        <h1>Your followers are greatful for...</h1>
      </HeaderStyle>
      {hasFollowedUsers ? followedUsers : noFollowedUsers}
    </div>
  )
}

export default FollowedUsers;
