import React from 'react';

import UsersList from '../components/UsersList.js';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://thumbor-production-auction.hemmings.com/450x300/1148963/91386829.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;
