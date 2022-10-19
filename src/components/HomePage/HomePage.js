import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default HomePage;
