import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
    return (
       <section className="contact mt-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-success text-uppercase ">Contact us</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group my-4">
                           <input type="text" className="form-control py-4" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group my-4">
                           <input type="text" className="form-control py-4" placeholder="Subject *"/>
                       </div>
                       <div className="form-group my-4">
                           <textarea name="" className="form-control" id="" cols="30" rows="8" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-success px-5 py-2  text-uppercase "> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default ContactForm;