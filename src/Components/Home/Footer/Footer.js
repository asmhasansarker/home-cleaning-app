import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactDetailsCard from '../ContactDetailsCard/ContactDetailsCard';

const Footer = () => {
    const aboutUs = []
    const newsLetter = []
    const contactDetails = []
    const contactCard = [
        {
            icon: faMapMarkerAlt,
            title: "1109 Longview Avenue",
            describe:"New York, United States"
        },
        {
            icon: faMobileAlt,
            title: "+21 347 678 901",
            describe:"Mon till Friday: 7:00 till 5:00"
        },
        {
            icon: faEnvelope,
            title: "info@thecleaner.com",
            describe:"We reply within 1 work day"
        }
    ]
    const quickNavigation = [
        {name: "Home" , link: "/home"},
        {name: "About Us" , link: "/aboutUs"},
        {name: "Services" , link: "/services"},
        {name: "Projects" , link: "/projects"},
        {name: "Blog" , link: "/blog"},
        {name: "Contact Us" , link: "/contactUs"}
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-3 pb-3">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About Us"} menuItems={aboutUs}>
                        <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laborum praesentium repellat cum magni cumque alias odit velit corrupti facilis.
                        </p>

                        <button className="btn btn-primary">Get This Theme</button>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Quick Navigation" menuItems={quickNavigation}/>
                    <FooterCol key={3} menuTitle="Contact Details" menuItems={contactDetails}>
                        <div className="row custom-contact">
                        {
                            contactCard.map(contact => <ContactDetailsCard contact={contact}></ContactDetailsCard>)
                        }
                        </div>
                    </FooterCol>
                    <FooterCol key={4} menuTitle="Newsletter" menuItems={newsLetter}> 
                        <div class="input-group mb-3 ">
                            <input type="text" class="form-control p-4 " placeholder="Your email..." />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">Send</button>
                            </div>
                        </div>

                        <h4 className="my-4 font-weight-bold">Working Hours</h4>
                        <div className="row my-1">
                            <div className="col-md-6 text-muted">
                                Monday-Friday
                            </div>
                            <div className="col-md-6 font-weight-bold">
                                07:00 - 16:00
                            </div>
                        </div>
                        <div className="row my-1 ">
                            <div className="col-md-6 text-muted">
                                Saturday
                            </div>
                            <div className="col-md-6 font-weight-bold">
                                09:00 - 15:00
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-md-6 text-muted">
                                Sunday
                            </div>
                            <div className="col-md-6 text-primary font-weight-bold">
                                We're Closed
                            </div>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;

