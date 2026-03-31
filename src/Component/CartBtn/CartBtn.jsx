import React from 'react';

const CartBtn = ({ cartselected, setCartselected }) => {

    const handleBuyAll = () => {
        if (cartselected.length === 0) return;
        // ekhane tumi checkout/payment logic add korte paro
        alert(`You bought ${cartselected.length} items!`);
        // option: cart clear kore deya
        setCartselected([]);
    };

    return (
        <div className="space-y-4 container mx-auto mt-4">

            {/* Cart Items */}
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
                        onClick={() =>
                            setCartselected(cartselected.filter(item => item.id !== selectCart.id))
                        }
                    >
                        Remove
                    </button>
                </div>
            ))}

            {cartselected.length > 0 && (
                <div className="container mx-auto mt-6">
                    {cartselected.length > 0 && (
                        <div className="container mx-auto mt-6">
                            {cartselected.length > 0 && (
                                <>
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
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}

        </div>
    );
};

export default CartBtn;