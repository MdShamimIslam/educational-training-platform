import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;