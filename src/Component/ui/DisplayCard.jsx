import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const DisplayCard = ({ card, setCartselected, cartselected }) => {
    const [isSelected, setSelected] = useState(false);


    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <ToastContainer></ToastContainer>
            
            <div className="card-body">
                <span className="badge badge-xs badge-warning ml-auto">{card.tag}</span>

                <div className='bg bg-base-300 w-10 rounded-full'>
                    <img src={card.icon} alt="" />
                </div>

                <div className=" space-y-3">
                    <h2 className="text-3xl font-bold">{card.name}</h2>
                    <p>{card.description}</p>
                    <p className="text-xl">${card.price}/mo</p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {card.features?.map((item, index) => (
                        <li key={index} className="flex items-center">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 me-2 text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>

                            <span>{item}</span>

                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button
                        onClick={() => {
                            const exists = cartselected.find(item => item.id === card.id);

                            if (!exists) {
                                toast.success('Card added')
                                setCartselected([...cartselected, card]);
                                setSelected(true);
                            }
                        }}
                        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">{isSelected === true ? 'added' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayCard;