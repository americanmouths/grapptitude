import React from 'react';
import { HeaderStyle } from '../../theme/style';

const Header = () => {

  const loggedIn = !!localStorage.getItem("token")

  return (
    <HeaderStyle>
      {loggedIn ? <h1>The community is grateful for...</h1> : <h1>What are you thankful for?</h1>}
    </HeaderStyle>
    )
  }

export default Header;
