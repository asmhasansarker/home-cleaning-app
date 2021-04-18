import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const NoItemBook = () => {
    return (
        <div className="container row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Hello</h1>
                <p className="lead">You do not book any service. Please go home and then book a service which you want</p>
                
                
                <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
            </div>
            </div>
        </div>
    );
};

export default NoItemBook;