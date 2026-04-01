import React from 'react';
import DisplayCard from '../ui/DisplayCard';

const Products = ({ Cards, setCartselected, cartselected}) => {

return <div>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
        {
            Cards.map((card) => {

                return (
                <DisplayCard key={card.id} card={card} setCartselected ={setCartselected} cartselected={cartselected}></DisplayCard>
                );
            })
        }

        </div>
    </div>
};

export default Products;