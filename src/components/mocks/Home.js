import React, { Component } from 'react';
import Nav from './Nav';
import TabControl from './TabControl';

export class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TabControl />
      </div>
    );
  }
}

export default Home;
