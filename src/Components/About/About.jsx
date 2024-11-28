const About = () => {
  return (
    <div className="container mx-auto mt-2 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image and Stats */}
        <div className="relative">
          <img
            src="https://i.ibb.co/DW56ky7/istockphoto-1322205588-612x612.jpg"
            alt="Team working"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 flex justify-center">
            <div className="bg-white shadow-lg p-4 rounded-lg flex space-x-8 mb-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-sky-600">200+</h3>
                <p className="text-gray-600">Team member</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-sky-600">900+</h3>
                <p className="text-gray-600">Client review</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-sky-600">20+</h3>
                <p className="text-gray-600">Complete project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="mt-4">
          <h4 className="text-sky-600 uppercase font-bold">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Why <span className="text-black">Choose Us?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Our team is here to give you personalized support within the hour,
            available 24/7. In accordance with our commitment to providing
            superior and professional service, join daily live webinars, watch
            our tutorials, or browse through our knowledge base.
          </p>
          <button className="mt-6 bg-sky-600 text-white py-3 px-6 rounded-lg shadow-md 0 transition-all mb-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
