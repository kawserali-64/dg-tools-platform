import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-4'>
            <div className='flex justify-around mt-5 mb-5'>
                <div>
                    <h1 className='text-5xl font-bold text-white'>50K+</h1>
                    <p className='text-white mt-5'>Active Users</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white'>200+</h1>
                    <p className='text-white mt-5'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white'>4.9</h1>
                    <p className='text-white text-center mt-5'>Rating</p>
                </div>
                
            </div>
        </div>
    );
};

export default Rating;