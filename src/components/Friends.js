

import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
  } from "react-router-dom";
import Friend from './Friend';
  
const Friends = () => {
    // const albums = useLoaderData();
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