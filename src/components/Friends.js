

import React from 'react';
import {
    useLoaderData,
  } from "react-router-dom";
import Friend from './Friend';
  
const Friends = () => {
    const friends = useLoaderData()

    return (
        <div>
            <h1>Freinds {friends.length}</h1>
            {
                friends.map( friend=> <Friend key={friend.id}
                    
                    friend = { friend }
                ></Friend>)
            }
        </div>
    );
};

export default Friends;