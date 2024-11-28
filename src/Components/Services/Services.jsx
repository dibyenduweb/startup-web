/* eslint-disable no-unused-vars */
import React from 'react';
import services from '../../../public/servicesData.json'; // Adjust the path based on your folder structure
import Navbar from '../Navber/Navber';
import Footer from '../Footer/Footer';

const Services = () => {
  return (
   <>
   <Navbar/>
    <div id="service">
      <div className="mt-2 py-12">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 uppercase font-bold">Premium Service</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            That Is The Best Service
          </h2>
          <p className="text-lg text-gray-600">Determine The Service You Need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${service.bgColor}`}
              >
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h5 className="text-xl font-bold">{service.title}</h5>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Services;
