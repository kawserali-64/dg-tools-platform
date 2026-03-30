import React from 'react';

const Workflow = () => {
    return (
        <div className='text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-20 mt-32 space-y-6'>
            <h1 className='text-white text-2xl font-bold'>Ready to Transform Your Workflow?</h1>
            <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
            <div className='justify-center gap-4 flex'>
                <button className='btn bg-white rounded-2xl text'>Explore Products</button>
                <button className='btn btn-outline rounded-2xl text-white'>View Pricing</button>
            </div>
            <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;