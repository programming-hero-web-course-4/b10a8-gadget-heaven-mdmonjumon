
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    const [cartLength, setCartLength] = useState(0);
    const [wishlistLength, setWishlistLength] = useState(0)

    return (
        <div>
            <div className='bg-[#F7F7F7]'>
                <Navbar cartLength={cartLength} wishlistLength={wishlistLength}></Navbar>

                <Outlet context={{ setCartLength, setWishlistLength }}></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;