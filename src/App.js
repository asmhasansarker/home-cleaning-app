import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from "react";
import Home from './Components/Home/Home/Home';
import AddService from './Components/AddService/AddService';
import AddReview from './Components/AddReview/AddReview';
// import Navigation from './Components/Home/Navigation/Navigation';
import Login from './Components/Login/Login';
// import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Testing from './Components/Testing/Testing';
import Book from './Components/Book/Book';
import BookingList from './Components/BookingList/BookingList';
import NoItemBook from './Components/NoItemBook/NoItemBook';
import ManageService from './Components/ManageService/ManageService';
import NewAdmin from './Components/NewAdmin/NewAdmin';
import WelcomeToDashboard from './Components/WelcomeToDashboard/WelcomeToDashboard';
import Admin from './Components/Admin/Admin';
import CheckAdmin from './Components/CheckAdmin/CheckAdmin';
// import PaymentGateway from './Components/PaymentGateway/PaymentGateway';

export const UserContext = createContext()
export const AdminCheck = createContext();




function App() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
    newUser: false,
    imageURL:""
    
  })
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <AdminCheck.Provider value={[admin, setAdmin]}>
      <Router>
      
        <Switch>
        <Route path="/home">
              <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/admin">
              <Admin></Admin>
          </PrivateRoute>
          <Route path="/dashboard/addService">
              <AddService></AddService>
          </Route>
          <Route path="/dashboard/bookingList">
              <BookingList></BookingList>
          </Route>
          <Route path="/dashboard/bookingList">
              <BookingList></BookingList>
          </Route>
         
          <Route path="/dashboard/review">
              <AddReview></AddReview>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
                   
          <PrivateRoute path="/dashboard/book/:serviceKey">
              <Book></Book>
          </PrivateRoute>
          <Route path="/dashboard/book">
              <NoItemBook></NoItemBook>
          </Route>
          <Route path="/dashboard/manageService">
              <ManageService></ManageService>
          </Route>
          <Route path="/dashboard/newAdmin">
              <NewAdmin></NewAdmin>
          </Route>
          {/* <PrivateRoute path="/checkAdmin">
              <CheckAdmin></CheckAdmin>
          </PrivateRoute> */}
          <PrivateRoute path="/dashboard">
              <WelcomeToDashboard></WelcomeToDashboard>
          </PrivateRoute>
          
          <Route exact path="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AdminCheck.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
