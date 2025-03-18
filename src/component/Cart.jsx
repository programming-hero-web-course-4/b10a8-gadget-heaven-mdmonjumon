import React, { useEffect, useState } from 'react';
import DisplayCart from './DisplayCart';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TbAdjustments } from 'react-icons/tb';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

const Cart = ({ cartData, handleRemoveItem, handleSortByPrice, setCart }) => {


    const [cartPrice, setCartPrice] = useState(0);

    const { setCartLength } = useOutletContext()

    const [openModal, setOpenModal] = useState(false)
    const [showModalPrice, setShowModalPrice] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        const totalPrice = cartData.reduce((previous, current) => previous + current.price, 0)
        setCartPrice(totalPrice)
    }, [cartData])


    const handlePurchase = () => {
        setShowModalPrice(cartPrice)
        localStorage.removeItem('cart-list')
        setCart([])
        setCartLength(0)
        setOpenModal(true)
        setCartPrice(0)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
        setTimeout(() => {
            navigate('/')
        }, 1000)
        setShowModalPrice(cartPrice)
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center my-12'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                    <p><span className='font-bold text-2xl'>Total cost: {cartPrice.toFixed(2)} </span></p>
                    <button
                        disabled={cartPrice === 0}
                        onClick={handleSortByPrice}
                        className={`font-semibold text-lg px-5 py-2 rounded-4xl inset-shadow-[#0B0B0B] flex items-center gap-2 
                            ${cartPrice === 0 ? 'cursor-not-allowed bg-stone-300 border-0 text-white' : 'cursor-pointer border-2 text-[#9538E2]'}
                        `}>Sort by Price <TbAdjustments className='text-3xl' />
                    </button>

                    <button disabled={cartPrice === 0}
                        onClick={handlePurchase}
                        className={`font-medium text-lg text-white px-6 py-3 inset-shadow-[#0B0B0B] bg-[#9538E2] rounded-4xl ${cartPrice === 0 ? 'cursor-not-allowed bg-stone-300' : 'cursor-pointer'} `}>
                        Purchase
                    </button>
                </div>
            </div>

            <div className='space-y-5 py-5'>
                {
                    cartData.map(product => <DisplayCart
                        product={product}
                        key={product.product_id}
                        status='cart'
                        handleRemoveItem={handleRemoveItem}
                    ></DisplayCart>)
                }
            </div>


            {/* modal */}
            
            <dialog className={`modal modal-bottom sm:modal-middle ${openModal ? 'modal-open' : ''}`}>
                <div className="modal-box place-items-center space-y-2 py-5 ">
                    <p><span> <RiVerifiedBadgeFill className='text-8xl text-green-400' /> </span></p>
                    <h3 className='font-bold text-4xl'>Payment Successfully</h3>
                    <div className="divider w-full"></div>
                    <p className="text-lg">Thanks for Purchasing.</p>
                    <p><span className='text-lg font-medium'>Total: $ {showModalPrice.toFixed(2)}</span></p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleCloseModal} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;