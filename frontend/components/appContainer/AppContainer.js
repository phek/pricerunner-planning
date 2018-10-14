import React, { Component } from 'react';
import './AppContainer.css';
import Poll from '../poll/Poll';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <Poll />
      </div>
    );
  }
}

export default AppContainer;
