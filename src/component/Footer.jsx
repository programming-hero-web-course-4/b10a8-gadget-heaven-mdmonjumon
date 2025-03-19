import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';

const Footer = () => {
    return (
        <div className='my-16 max-w-7xl mx-auto'>


            <div className='text-black space-y-4'>
                <h2 className="font-bold text-2xl md:text-5xl text-center md:max-w-5xl mx-auto">Gadget Heaven</h2>
                <p className="text-center text-[#09080F99] md:max-w-3xl mx-auto">Leading the way in cutting-edge technology and innovation.</p>
            </div>


            <footer className="footer sm:footer-horizontal place-items-center items-start p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </div>



    );
};

export default Footer;