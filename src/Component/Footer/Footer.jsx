import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer footer-horizontal bg-[#101727] text-[#FFFFFF] p-20 justify-around">
                <nav>
                    <h2 className='text-3xl font-bold text-white'>DigiTools</h2>
                    <p className='text-[#a6adb3]'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </nav>
                <nav className='text-[#a6adb3]'>
                    <h6 className="text-xl font-bold text-white">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className='text-[#a6adb3]'>
                    <h6 className="text-white text-xl font-bold">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav className='text-[#a6adb3]'>
                    <h6 className="text-white text-xl font-bold">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl font-bold">Social Links</h6>
                    <div className='flex gap-4'>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} className=" text-2xl cursor-pointer hover:scale-110 transition" />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className=" text-2xl cursor-pointer hover:scale-110 transition"
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTwitter} className=' text-2xl cursor-pointer hover:scale-110 transition' />
                        </div>

                    </div>
                </nav>
            
            </footer>

            <footer className="bg-[#101727] text-white px-20 p-20 ">
                <hr className='text-[#a6adb3] mx-24' />
                <br />
                <br />
                <div className="flex flex-row justify-between items-center text-sm text-[#a6adb3] mx-24">

                    <p>© 2026 DigiTools. All rights reserved.</p>

                    <div className="flex gap-4 mt-2 ">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;