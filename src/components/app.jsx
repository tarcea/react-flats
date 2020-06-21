import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: null, //[lat, lng],
      flats: flats
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList selectFlat={this.selectFlat()} />
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
