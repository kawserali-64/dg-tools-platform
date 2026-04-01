import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavBar = ({cartCount}) => {
    
    return (
            <div className="navbar bg-base-100 shadow-sm justify-around sticky top-0 z-50">
                <div className="">
                    <h1 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</h1>
                </div>

                <div className="md:flex hidden">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                 
                <div className="flex gap-3 items-center"><div className="relative">
                    <ShoppingCart />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                        {cartCount}
                    </span>
                </div>
                     <button>Login</button>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</button>
                </div>
            </div>

    );
};

export default NavBar;