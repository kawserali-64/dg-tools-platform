import React, { use, useState } from 'react';
import Products from '../Products/Products';
import CartBtn from '../CartBtn/CartBtn';

const Card = ({cardPromise}) => {
    const Cards = use(cardPromise)

    const [selectedBtn, setSelectedBtn] = useState('Products')
    
    const [cartselected, setCartselected] = useState([]);
    return <div>
        <div className='container mx-auto text-center space-y-4'>
            <h1 className='font-bold text-4xl'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex justify-center'>
                <button 
                onClick={()=>setSelectedBtn("Products")}
                className={`btn ${selectedBtn === 'Products'?'bg-linear-to-r from-[#4F39F6] to-[#9514FA]': 'bg-red-400'}  text-white rounded-r-none rounded-l-xl`}>Products</button>
                <button
                onClick={()=>setSelectedBtn("cart")}
                className={`btn ${selectedBtn === 'cart'?'bg-linear-to-r from-[#4F39F6] to-[#9514FA]': 'bg-red-400'}  text-white rounded-l-none rounded-r-xl`}>Cart ({cartselected.length})</button>
            </div>
        </div>

        {selectedBtn === 'Products'? <Products Cards={Cards} setCartselected={setCartselected} cartselected={cartselected}></Products>:
        <CartBtn cartselected={cartselected} setCartselected={setCartselected} />}
    </div>;
};

export default Card;