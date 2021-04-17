// import React, { useState } from "react";
// import { ListGroup } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart, faShoppingBag, faCommentAlt, faPlus, faThLarge, faUserShield, faUserCog } from '@fortawesome/free-solid-svg-icons'

// import "./Dashboard.css";
// import AddReview from "../AddReview/AddReview";
// import Book from "../Book/Book";
// import BookingList from "../BookingList/BookingList";
// import { Link, useParams } from "react-router-dom";

// const Dashboard = () => {

//   const { serviceKey } = useParams();


//     const [newReview, setNewReview] = useState(false);
//     const [bookingPage, setBookingPage] = useState(true);
//     const [allBookings, setAllBookings] = useState(false);
//     const [addService, setAddService] = useState(false);
//     const [admin, setAdmin] = useState(false);
//     const [newAdmin, setNewAdmin] = useState(false);
//     const [manageService, setManageService] = useState(false);

//     const handleBook = () =>{
//         setBookingPage(true);
//         setNewReview(false);
//         setAllBookings(false);

//     }
//     const handleAllBookings = () =>{
//         setBookingPage(false);
//         setNewReview(false);
//         setAllBookings(true);
//     }
//     const handleReview = () =>{
//         setBookingPage(false);
//         setNewReview(true);
//         setAllBookings(false);
//     }
//     const handleAddService = () =>{
//       setBookingPage(false);
//       setAddService(true);
//       setAllBookings(false);
//     }
//     const handleAdmin = () =>{
//       setBookingPage(false);
//       setAddService(true);
//       setAllBookings(false);
//     }
//     const handleNewAdmin = () =>{
//       setBookingPage(false);
//       setAddService(true);
//       setAllBookings(false);
//     }
//     const handleManageService = () =>{
//       setBookingPage(false);
//       setAddService(true);
//       setAllBookings(false);
//     }
//   return (

   
//       <div className=" d-flex ">
//         <div className="col-md-3  sidebar">
//           <div className="logo">
//             <Link to="/">Company Logo</Link>
//           </div>

//           <div>
//             <ListGroup>
//             <ListGroup.Item action variant="primary" onClick={handleAdmin}>
//               <FontAwesomeIcon icon={faUserShield} className="mr-3" />
//                 Admin
//               </ListGroup.Item>
//               <ListGroup.Item action variant="primary" onClick={handleNewAdmin}>
//               <FontAwesomeIcon icon={faUserCog} className="mr-3" />
//                 Add a new Admin
//               </ListGroup.Item>
//               <ListGroup.Item action variant="primary" onClick={handleManageService}>
//               <FontAwesomeIcon icon={faThLarge} className="mr-3" />
//                 Manage Service
//               </ListGroup.Item>
//               <ListGroup.Item action variant="primary" onClick={handleAddService}>
//               <FontAwesomeIcon icon={faPlus} className="mr-3" />
//                 Add Service
//               </ListGroup.Item>
//               <ListGroup.Item action variant="primary" onClick={handleBook}>
//               <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
//                 Book
//               </ListGroup.Item>
//               <ListGroup.Item action variant="secondary" onClick={handleAllBookings}>
//               <FontAwesomeIcon icon={faShoppingBag} className="mr-3" />
//                 Booking List
//               </ListGroup.Item>
//               <ListGroup.Item action variant="success" onClick={handleReview}>
//               <FontAwesomeIcon icon={faCommentAlt} className="mr-3" />
//                 Review
//               </ListGroup.Item>
             
//             </ListGroup>
//           </div>
//         </div>
//         <div className="col-md-9  content">
           

//             {
//                 newReview && <AddReview></AddReview>
//             }
//             {
//                 bookingPage && <Book serviceKey={serviceKey}></Book>
//             }
//             {
//                 allBookings && <BookingList></BookingList>
//             }
            
//         </div>
//       </div>

//   );
// };

// export default Dashboard;
