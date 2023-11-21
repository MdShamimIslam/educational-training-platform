import React from 'react';
import errorImg from '../assets/Icon.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-44'>
            <div className='text-center'>
            <img className='w-64' src={errorImg} alt="" />
            <h2 className='my-3 text-6xl font-bold'>Ops !!!</h2>
            <h3 className="text-xl font-semibold">No Data Found</h3>
            <Link className='text-purple-700 underline' to='/'>Back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;