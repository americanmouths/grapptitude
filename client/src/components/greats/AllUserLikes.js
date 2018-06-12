import React from 'react';
import { HeaderStyle, NoUserLikes } from '../../theme/style';
import GreatComponent from './GreatComponent';


const AllUserLikes = ({likes}) => {

  const hasUserLikes = likes.length >= 1
  const userLikes = likes.map((great, index) => {
    return (
      <div key={index}>
        <GreatComponent great={great} />
      </div>
    )
  })

  const noUserLikes = (
    <NoUserLikes>
      <p>Get started by liking some posts...</p>
      <a href="/main"><button>All</button></a>
    </NoUserLikes>
  )

  return(
    <div>
      <HeaderStyle>
        <h1>Posts you have liked...</h1>
      </HeaderStyle>
      {hasUserLikes ? userLikes : noUserLikes}
    </div>
  )
}

export default AllUserLikes;
