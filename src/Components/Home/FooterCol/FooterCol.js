import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 className="text-success font-weight-bold">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4 ">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary text-decoration-none border-bottom d-block my-1">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;