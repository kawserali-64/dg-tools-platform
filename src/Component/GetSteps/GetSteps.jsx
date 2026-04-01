import React from 'react';
import userImg from '../../assets/user.png'
import productImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'

const GetSteps = () => {
    return (
        <div className='mt-32 bg-[#F9FAFC] p-20'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-black text-4xl '>Get Started in 3 Steps</h1>
                <p className='text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto'>

                <div className="card bg-base-100 w-auto shadow-sm">
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 flex items-center justify-center ml-auto mr-6 mt-6'>
                        <p className='text-white'>01</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center'>
                            <img
                                src={userImg}
                                alt="Shoes"
                                className="rounded-xl items-center" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card <br /> required to get started.</p>

                    </div>
                </div>

                <div className="card bg-base-100 w-auto shadow-sm">
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 flex items-center justify-center ml-auto mr-6 mt-6'>
                        <p className='text-white'>02</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center'>
                            <img
                                src={productImg}
                                alt="Shoes"
                                className="rounded-xl items-center" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p>Browse our catalog and select the tools <br /> that fit your needs.</p>

                    </div>
                </div>

                <div className="card bg-base-100 w-auto shadow-sm">
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 flex items-center justify-center ml-auto mr-6 mt-6'>
                        <p className='text-white'>03</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <div className='bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center'>
                            <img
                                src={rocketImg}
                                alt="Shoes"
                                className="rounded-xl items-center" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p>Download and start using your premium <br /> tools immediately.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetSteps;