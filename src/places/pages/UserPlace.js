import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 1,
        title: 'The Taj',
        description: 'One most famous monument in the world.',
        imageUrl: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyMzY3NDAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat: 27.1751387,
            lng: 78.0399507
        },
        creator: 'u1'
    },
    {
        id: 2,
        title: 'The Taj',
        description: 'One most famous monument in the world.',
        imageUrl: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIyMzY3NDAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat: 27.1751387,
            lng: 78.0399507
        },
        creator: 'u2'
    }
]
const UserPlace = (props) => {
    const userID = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userID);
    return (<PlaceList places={loadedPlaces} />);
}

export default UserPlace;