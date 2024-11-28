/* eslint-disable no-unused-vars */

import React from 'react';
import Navbar from '../Navber/Navber';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 p-8 mt-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to [Your Agency Name], where we specialize in crafting exceptional web experiences.
                        Our dedicated team of professionals is passionate about turning your ideas into reality.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                        With years of experience in web development, design, and digital marketing, we strive to deliver
                        high-quality solutions tailored to your unique needs.
                    </p>

                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Mission & Vision</h2>
                    <div className="flex justify-center space-x-4 mb-6">
                        <div className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-xs">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Our Mission</h3>
                            <p className="text-gray-700">
                                Our mission is to empower businesses through innovative web solutions, helping you to grow and
                                succeed in the digital landscape.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-xs">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Our Vision</h3>
                            <p className="text-gray-700">
                                Our vision is to be a leading web agency recognized for delivering exceptional services
                                and driving success for our clients.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Values</h2>
                    <div className="flex justify-center space-x-4">
                        <div className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-xs">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Integrity</h3>
                            <p className="text-gray-700">
                                We believe in transparency and honesty in all our dealings, ensuring trust and accountability in every project.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-xs">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Collaboration</h3>
                            <p className="text-gray-700">
                                We work closely with our clients to understand their needs and objectives, fostering a partnership that leads to success.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-xs">
                            <h3 className="text-xl font-semibold text-blue-500 mb-2">Innovation</h3>
                            <p className="text-gray-700">
                                We stay ahead of the curve by embracing new technologies and methodologies, delivering cutting-edge solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;


    {/* <a
                    href="/contact"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Contact Us
                </a> */}