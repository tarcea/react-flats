import React from 'react';
import Flat from './flat';
import flats from './flats';

const FlatList = (props) => {
  {console.log(flats)}
  return (
    <div className="flat-list">
      <Flat />
    </div>
  );
};
export default FlatList;
