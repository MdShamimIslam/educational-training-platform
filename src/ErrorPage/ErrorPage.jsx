import React from 'react';
import errorImg from '../assets/Icon.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center lg:my-44 md:my-20 my-16'>
            <div className='text-center'>
            <img className='lg:w-64 md:w-48 w-36' src={errorImg} alt="" />
            <h2 className='my-2 lg:text-6xl md:5xl text-3xl font-bold'>Ops !!!</h2>
            <h3 className="md:text-xl text-lg font-semibold">No Data Found</h3>
            <Link className='text-purple-700 underline' to='/'>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;