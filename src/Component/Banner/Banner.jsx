import React from 'react';
import imgBageIcon from '../../assets/Group 5.png'
import bannerImg from '../../assets/banner.png'
const Banner = () => {
    return (

        <div className='flex container mx-auto justify-between items-center p-4'>
            <div className='left-side space-y-4'>
                <div className="badge bg-[#E1E7FF]">
                    <img src={imgBageIcon} alt="" />
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        New: AI-Powered Tools Available
                    </span>
                </div>
                <h1 className='font-bold text-4xl'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                   
                </p>

                <div className='flex gap-4'>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                
                <button className='btn btn-outline rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border border-[#4F39F6]'>  Watch Demo</button>
                </div>
            </div>
            <div className='right-side'>
                <img src={bannerImg} alt="" />
            </div>

        </div>

    );
};

export default Banner; 