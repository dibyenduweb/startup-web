/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React from 'react';

const onlineDesignServices = [
    {
      title: "Web Development",
      description: "Creating visually appealing and user-friendly websites.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721198.png",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Graphic Design",
      description: "Designing graphics for marketing and branding.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721306.png",
      bgColor: "bg-teal-100"
    },
    {
      title: "Logo Design",
      description: "Crafting unique logos that represent your brand identity.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png",
      bgColor: "bg-blue-100"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces for web and mobile applications.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721288.png",
      bgColor: "bg-red-100"
    },
    {
      title: "WordPress Development",
      description: "Building and customizing WordPress sites for your business needs.",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732203.png", // Example icon
      bgColor: "bg-purple-100"
    },
    {
      title: "Digital Marketing",
      description: "Implementing strategies to boost your online presence and drive traffic.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png", // Example icon
      bgColor: "bg-orange-100"
    }
  ];
  
  

const ServiceProvider = ({ title, icon, bgColor }) => {
  return (
    <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${bgColor}`}>
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h5 className="text-xl font-bold">{title}</h5>
    </div>
  );
};

const ServiceOffers = () => {
  return (
    <div id="online-design">
      <div className="mt-2 py-12">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 uppercase font-bold">Our Best Premium Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
          {"We Provide These Services"}
          </h2>
          
          <p className="text-lg text-gray-600">Find Your Service</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4">
          {onlineDesignServices.map((service, index) => (
            <ServiceProvider
              key={index}
              title={service.title}
              icon={service.icon}
              bgColor={service.bgColor}
            />
          ))}
        </div>
        <div className="flex justify-center m-4">
    <a href="/service" className="bg-blue-500 text-white p-2 rounded-md inline-block">See More</a>
</div>

      </div>
    </div>
  );
};

export default ServiceOffers;