

import React from 'react';
// import {useLoaderData} from 'react';
import {useLoaderData} from "react-router-dom"

const FriendDetails = () => {
    const data = useLoaderData()
    const { name, phone, email, website, company} = data;
    console.log(data)
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <h5>Company : {company.name}</h5>
        </div>
    );
};

export default FriendDetails;