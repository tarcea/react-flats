import React from 'react';
import Flat from './flat';
import flats from '../../data/flats';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat
                            name={flat.name}
                            price={flat.price}
                            priceCurrency={flat.priceCurrency}
                            imageUrl={flat.imageUrl}
                            key={flat.name}
                            lat={flat.lat}
                            lng={flat.lng}
                            selectFlat={props.selectFlat}
                          />)}
    </div>
  );
};
export default FlatList;
