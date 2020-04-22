import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from './flats';

class App extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
