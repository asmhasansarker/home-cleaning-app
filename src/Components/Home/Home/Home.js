import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import ReviewArea from '../ReviewArea/ReviewArea';

import ServicesArea from '../ServicesArea/ServicesArea';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HeaderSlider></HeaderSlider>
            <ServicesArea></ServicesArea>
            <Projects></Projects>
            <ReviewArea></ReviewArea>
            <ContactForm></ContactForm>
            <Footer></Footer>
       
        </div>
    );
};

export default Home;