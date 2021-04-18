import React, { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBag,
  faCommentAlt,
  faPlus,
  faThLarge,
  faUserShield,
  faUserCog,
  faHome,
  faTachometerAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import logo from "../../images/logo.jpg";
import { AdminCheck, UserContext } from "../../App";

const Sidebar = () => {
  const [user] = useContext(UserContext);
  const [admin, setAdmin] = useContext(AdminCheck);

  // console.log(user.email)

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/checkAdmin?email=" + user.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        if (data.length > 0) {
          setAdmin(data.length);
        }
      });
  }, [user.email]);

  // const [admin] = useContext(AdminCheck);
  console.log(admin);
  return (
    <div className="sidebar">
      <div className="mb-3 ml-3">
        <img src={logo} className="img-fluid" alt="" />
      </div>
      <div className="ml-3 text-dark">
        {admin && (
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to="/dashboard" className="text-dark">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/admin" className="text-dark">
              <FontAwesomeIcon icon={faUserShield} className="mr-3" />
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/newAdmin" className="text-dark">
              <FontAwesomeIcon icon={faUserCog} className="mr-3" />
              Make admin
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/manageService"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faThLarge} className="mr-3" />
              Manage Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/addService"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-3" />
              Add Service
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/dashboard/bookingList"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="mr-3" />
              Booking List
            </Nav.Link>

            <Nav.Link as={Link} to="/" className="text-dark">
              <FontAwesomeIcon icon={faHome} className="mr-3" />
              Home
            </Nav.Link>
            {user.isSignedIn && (
              <Nav.Link
                as={Link}
                to="/"
                className="text-dark"
                onClick={() => user.handleSignOut()}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        )}
        {!admin && (
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={Link} to="/dashboard" className="text-dark">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
              Dashboard
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard/book" className="text-dark">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
              Book
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboard/bookingList"
              className="text-dark"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="mr-3" />
              Booking List
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard/review" className="text-dark">
              <FontAwesomeIcon icon={faCommentAlt} className="mr-3" />
              Review
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-dark">
              <FontAwesomeIcon icon={faHome} className="mr-3" />
              Home
            </Nav.Link>

            {user.isSignedIn && (
              <Nav.Link
                as={Link}
                to="/"
                className="text-dark"
                onClick={() => user.handleSignOut()}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                Sign Out
              </Nav.Link>
            )}
          </Nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
