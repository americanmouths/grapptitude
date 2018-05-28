import React from 'react';

const Header = () => {

const loggedIn = !!localStorage.getItem("token")

  return(
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            {loggedIn ? <h1>The community is greatful for...</h1> : <h1>What are you thankful for?</h1>}
          </div>
        </div>
      </div>
  )
}

export default Header;
