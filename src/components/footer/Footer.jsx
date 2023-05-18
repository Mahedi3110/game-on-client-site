import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='md:px-28 px-10 bgtheme text-white py-16'>
            <div className='grid md:grid-cols-6 grid-cols-3 gap-10 mx-4 mb-5'>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold mb-2'>Master Chef</h1>
                    <p className="text-gray-400 mb-4">The Master Chef website is a platform that showcases the talents of professional chefs and provides users with access to their recipes, tips, and techniques.</p>
                    <div className='flex'>
                        <i className="fa-brands fa-google text-3xl ml-1"></i>
                        <i className="fa-brands fa-facebook text-3xl mx-6"></i>
                        <i className="fa-brands fa-github text-3xl"></i>
                    </div>
                </div>
                <div className='md:ml-5 ml-0'>
                    <h1 className='text-lg font-bold mb-4'>About Us</h1>
                    <p className="text-gray-400 mb-2">Chef</p>
                    <p className="text-gray-400 mb-2">Work</p>
                    <p className="text-gray-400 mb-2">Services</p>
                    <p className="text-gray-400 mb-2">Avialablity</p>
                    <p className="text-gray-400 mb-2">Careers</p>
                </div>
                <div className='ml-5'>
                    <h1 className='text-lg font-bold mb-4'>Offers</h1>
                    <p className="text-gray-400 mb-2">Packages</p>
                    <p className="text-gray-400 mb-2">Plans</p>
                    <p className="text-gray-400 mb-2">Items</p>
                    <p className="text-gray-400 mb-2">Order</p>
                    <p className="text-gray-400 mb-2">Pricing</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Hire chef for</h1>
                    <p className="text-gray-400 mb-2">Marriage</p>
                    <p className="text-gray-400 mb-2">Birthday</p>
                    <p className="text-gray-400 mb-2">Meeting</p>
                    <p className="text-gray-400 mb-2">Programme</p>
                    <p className="text-gray-400 mb-2">Ocation</p>
                </div>
                <div>
                    <h1 className='text-lg font-bold mb-4'>Contact</h1>
                    <p className="text-gray-400 mb-4">798 Mitaly Bhaban, Dampara 1 number lane, Chatteshwari circle, Mehedibag Road, Chittagong</p>
                    <p className="text-gray-400">+8801830-256-369</p>
                </div>
            </div>
            <hr className='hr-style' />
            <div className='flex justify-between mt-5 mx-4'>
                <p className="text-gray-400">@2023 Master Chef. All Rights Reserved</p>
                <p className="text-gray-400">Powered by Master Chef</p>
            </div>
        </div>
    );
};

export default Footer;