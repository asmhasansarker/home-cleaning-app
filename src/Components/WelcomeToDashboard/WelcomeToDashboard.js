import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const WelcomeToDashboard = () => {
 

    return (
        <div className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 jumbotron">
            <div>
            <h1 className="text-center">Welcome to Dashboard</h1>
        </div>
            </div>
        </div>
    );
};

export default WelcomeToDashboard;