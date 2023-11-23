import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Access from './Access';
import { Helmet } from 'react-helmet-async';

const AccessCourse = () => {
    const accesses = useLoaderData();
    console.log(accesses);
    return (
        <div className='my-16 text-center'>
            <Helmet>
        <title>s.Academy || Access Course</title>
      </Helmet>
            <div className='border-b-2 border-cyan-500 max-w-4xl mx-auto'>
            <h3 className='lg:text-4xl md:text-3xl text-xl font-semibold text-green-500 p-4'>
                When you access our courses you can enjoy the following benefits so
                if you want the benefits then access now.
            </h3>
            <button className="btn my-6 bg-yellow-500 text-lg">Payment now</button>
            </div>
            <h2 className='lg:text-4xl md:text-3xl text-xl font-semibold my-8'>
                    What Is The Specialty_ Of This Course?
                </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mt-6">
                
                {
                    accesses.map(access => <Access key={access.id} access = {access}></Access>)
                }
            </div>
            
        </div>
    );
};

export default AccessCourse;