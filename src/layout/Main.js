

import React from 'react';
import Navigation from '../components/Navigation';
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>

                <h4>It's Can't be Change</h4>
                <h4>It's Can't be Change</h4>
                <hr />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;