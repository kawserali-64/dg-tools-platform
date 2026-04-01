import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';

const CartBtn = ({ cartselected, setCartselected }) => {

    const handleBuyAll = () => {
        if (cartselected.length === 0) return;
        alert(`You bought ${cartselected.length} items!`);
        setCartselected([]);
    };

    return (
        <div className="space-y-4 container mx-auto mt-4">

    {cartselected.length > 0 && (
        <div>
            <h2 className='font-bold text-3xl'>Your Card</h2>
        </div>
    )}
   {cartselected.length === 0 && (
    <div className="flex justify-center items-center h-64 flex-col gap-3 text-gray-400">
        <ShoppingCart size={50} />
        <p>Your cart is empty</p>
    </div>
)}
    

    {cartselected.map((selectCart) => (
        <div key={selectCart.id} className="cart-item flex gap-4 items-center border p-2 rounded">
            <img
                src={selectCart.icon}
                alt={selectCart.name}
                className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
                <h2 className="font-bold">{selectCart.name}</h2>
                <p>${selectCart.price}/mo</p>
            </div>
            <button
                className="btn btn-sm bg-red-500 text-white"
                onClick={() => {
                    toast.warn("Card removed");
                    setCartselected(cartselected.filter(item => item.id !== selectCart.id));
                }}
            >
                Remove
            </button>
        </div>
    ))}

    {cartselected.length > 0 && (
        <div className="container mx-auto mt-6">
            <div className="flex justify-between items-center font-bold text-lg border-b pb-2">
                <span>Total:</span>
                <span>${cartselected.reduce((sum, item) => sum + item.price, 0)}</span>
            </div>

            <div className="mt-4">
                <button
                    className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6 py-3"
                    onClick={handleBuyAll}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )}
</div>
    );
};

export default CartBtn;