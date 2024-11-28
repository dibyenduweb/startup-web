/* eslint-disable no-unused-vars */
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../Navber/Navber';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 p-8 mt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        We would love to hear from you! Please fill out the form below, and we’ll get in touch with you shortly.
                    </p>

                    {/* Flexbox for Form and Contact Details */}
                    <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 gap-4">
                        <form className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Email Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>

                        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
                            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Details</h2>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center">
                                    <FaPhone className="text-blue-500 mr-2" />
                                    <span className="text-lg text-gray-700">+91 6296491136</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-blue-500 mr-2" />
                                    <span className="text-lg text-gray-700">tifikart@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-blue-500 mr-2" />
                                    <span className="text-lg text-gray-700">Kolkata</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090873!2d144.9537353153184!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f7b4a09%3A0xd3c6e40b2b18e18d!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1634051862528!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
