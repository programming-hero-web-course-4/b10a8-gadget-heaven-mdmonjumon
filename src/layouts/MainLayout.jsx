
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='bg-[#F7F7F7]'>
                <Navbar></Navbar>

                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default MainLayout;