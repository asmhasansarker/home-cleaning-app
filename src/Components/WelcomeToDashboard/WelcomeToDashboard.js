import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const WelcomeToDashboard = () => {
 

    return (
        <div className="container row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 jumbotron">
            <div>
            <h1 className="text-center">Welcome to Dashboard</h1>
        </div>
            </div>
        </div>
    );
};

export default WelcomeToDashboard;