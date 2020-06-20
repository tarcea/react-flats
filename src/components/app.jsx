import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats: flats
    };


  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        {console.log(flats)}
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
