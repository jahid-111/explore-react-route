

import React from 'react';
// import {useLoaderData} from 'react';
import {Link, useLoaderData, useNavigate} from "react-router-dom"

const FriendDetails = () => {
    const data = useLoaderData();
    const {id, name, phone, email, website} = data;
    const navigate = useNavigate();
        const toCompanyDetails = () => {
            navigate(`/company/${id}`);
        }

    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            <p>Website : {website}</p>

            <button onClick={toCompanyDetails}> Company (button link)</button>

            <Link to={`/company/${id}`}>
                <h5>Company ( text link)    </h5>
            </Link>
            
        </div>
    );
};

export default FriendDetails;