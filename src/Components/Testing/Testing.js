import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Testing = () => {
    return (
        <div className="row container">
            <div className="col-md-4">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                content area 
            </div>
        </div>
    );
};

export default Testing;