import React from 'react';
import Banner from '../Banner/Banner';
import ComingEvents from '../ComingEvents/ComingEvents';
import Tutors from '../Tutors/Tutors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Tutors></Tutors>
           <ComingEvents></ComingEvents>
        </div>
    );
};

export default Home;