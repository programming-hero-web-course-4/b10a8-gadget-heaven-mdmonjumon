import React, { useEffect, useState } from 'react';
import { GrSort } from 'react-icons/gr';
import DisplayCart from './DisplayCart';
import { useOutletContext } from 'react-router-dom';

const Cart = ({ cartData, handleRemoveItem, handleSortByPrice, setCart }) => {

    const [cartPrice, setCartPrice] = useState(0);

    const {setCartLength} = useOutletContext()
    

    useEffect(() => {
        const totalPrice = cartData.reduce((previous, current) => previous + current.price, 0)
        setCartPrice(totalPrice)
    }, [cartData])


    const handlePurchase = () => {
        setCartPrice(0)
        localStorage.removeItem('cart-list')
        setCart([])
        setCartLength(0)
        
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
                        className={`font-semibold text-lg px-5 py-2 rounded-4xl inset-shadow-[#0B0B0B] flex items-center gap-3 
                            ${cartPrice === 0 ? 'cursor-not-allowed bg-stone-300 border-0 text-white' : 'cursor-pointer border-2 text-[#9538E2]'}
                        `}>Sort by Price <GrSort />
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
        </div>
    );
};

export default Cart;