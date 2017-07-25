import React from 'react';
import logo from '../images/logo.jpg';

const HeaderBackground = {
      backgroundColor: "#013E6B"
}

const Header = () =>
  (
      <div style={HeaderBackground} className="header">
          <a href="http://www.mesacounty.us"><img src={logo} className="App-logo" alt="logo" /></a>
      </div>
  );


export default Header;
