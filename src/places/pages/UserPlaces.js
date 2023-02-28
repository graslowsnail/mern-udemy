import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire state building',
        description: 'one of the most famous sky scrapers in the world!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTcav7lx2vlOKnydSmtVSdbF51RJtIAEX_Q&usqp=CAU',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire state building!!!!!!!!!!!!',
        description: 'one of the most famous sky scrapers in the world!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpTcav7lx2vlOKnydSmtVSdbF51RJtIAEX_Q&usqp=CAU',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return (
        <PlaceList items={loadedPlaces} />
    );

};

export default UserPlaces;
