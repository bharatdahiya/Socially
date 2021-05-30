import React from 'react';
import './PlaceList.css';
import Card from '../../shared/components/UI/Card';
import PlaceItem from './PlaceItem';
const PlaceList = props => {
    if (props.places.length === 0) {

        return <Card className="place-list center" >
            <h2>No places found. Maybe create one?</h2>
            <button>Share place</button>
        </Card>
    }
    return <ul className="place-list">
        {props.places.map(place => <PlaceItem key={place.id}
            id={place.id}
            title={place.title}
            description={place.description}
            imageUrl={place.imageUrl}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location} />)}
    </ul>;
}

export default PlaceList;