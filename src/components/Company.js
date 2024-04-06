



import React from 'react';
import {useLoaderData} from "react-router-dom"
import Navigation from './Navigation';
const Company = () => {

    const companysData =  useLoaderData();
    const {name, bs, catchPhrase} = companysData.company;
    // console.log(name)   


    return (
        <div>
            <Navigation></Navigation>
            <h1>{companysData.name}</h1>
            <hr />
            <h4>Company Name : {name}</h4>
            <p>Title : {bs}</p>
            <p>Catch Phrase : {catchPhrase}</p>

        </div>
    );
};

export default Company;