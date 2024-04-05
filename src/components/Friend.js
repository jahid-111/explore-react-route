

    import React from 'react';
import { Link } from 'react-router-dom';
    
    const Friend = ( {friend} ) => {
        const {id, email,  name, username, } =friend;
        return (
            <div className='friend'>
                <h3>Name : {name}</h3>
                <h5>Email  : {email}</h5>
                <p> <Link to={`/friend${id}`}> Username {username}</Link></p>
            </div>
        );
    };
    
    export default Friend;