import React from 'react';
import { GrSort } from 'react-icons/gr';
import DisplayCart from './DisplayCart';

const Cart = ({ cartData }) => {

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center my-12'>
                <h2 className='font-bold text-2xl'>Cart</h2>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                    <p><span className='font-bold text-2xl'>Total cost: </span></p>
                    <button className='font-semibold text-lg text-[#9538E2] px-5 py-2 border-2 rounded-4xl inset-shadow-[#0B0B0B] flex items-center gap-3'>Sort by Price <GrSort /> </button>
                    <button className='font-medium text-lg text-white px-6 py-3 inset-shadow-[#0B0B0B] bg-[#9538E2] rounded-4xl'>Purchase</button>
                </div>
            </div>


            <div className='space-y-5 py-5'>
                {
                    cartData.map(product => <DisplayCart product={product} key={product.product_id}></DisplayCart>)
                }
            </div>
        </div>
    );
};

export default Cart;