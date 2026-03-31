import React from 'react';
import DisplayCard from '../ui/DisplayCard';

const Products = ({ Cards, setCartselected, cartselected}) => {

return <div>
        <div className='container mx-auto grid grid-cols-3 gap-5'>
            
        {
            Cards.map((card) => {

                return (
                <DisplayCard card={card} setCartselected ={setCartselected} cartselected={cartselected}></DisplayCard>
                );
            })
        }

        </div>
    </div>
};

export default Products;