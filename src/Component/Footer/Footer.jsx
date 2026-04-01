
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white px-6 md:px-20 py-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                <div className="space-y-4 text-center md:text-left">
                    <h2 className='text-3xl font-bold'>DigiTools</h2>
                    <p className='text-[#a6adb3]'>
                        Premium digital tools for creators,<br />
                        professionals, and businesses. Work smarter<br />
                        with our suite of powerful tools.
                    </p>
                </div>

                <div className='text-center md:text-left'>
                    <h6 className="text-xl font-bold mb-3">Product</h6>
                    <div className="flex flex-col gap-2 text-[#a6adb3]">
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                    </div>
                </div>

                <div className='text-center md:text-left'>
                    <h6 className="text-xl font-bold mb-3">Company</h6>
                    <div className="flex flex-col gap-2 text-[#a6adb3]">
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                    </div>
                </div>

                <div className='text-center md:text-left'>
                    <h6 className="text-xl font-bold mb-3">Resources</h6>
                    <div className="flex flex-col gap-2 text-[#a6adb3]">
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h6 className="text-xl font-bold mb-3">Social Links</h6>
                    <div className='flex justify-center md:justify-start gap-4'>
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer hover:scale-110 transition" />
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer hover:scale-110 transition" />
                        <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer hover:scale-110 transition" />
                    </div>
                </div>

            </div>

            <div className="mt-12">
                <hr className='border-[#a6adb3]' />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a6adb3] mt-6">
                    <p className="text-center md:text-left">
                        © 2026 DigiTools. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;