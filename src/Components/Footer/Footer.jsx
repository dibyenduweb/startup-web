import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from "../../assets/images/webstacklogo.png";

const Footer = () => {
  return (
    <div className="bg-[#0B2545] mt-20 text-white py-8 px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-sm">
            Welcome to Web Stack! We craft stunning websites and intuitive user experiences to elevate your brand. Whether you’re a startup or an established business, we provide tailored solutions that engage your audience and drive results!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Pages</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Kolkata</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>+91 6296491136</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>tifikart@mail.com</span>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h3 className="text-xl font-semibold">Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Refund Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Client Policy</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Web Stack. All rights reserved. <span className='text-red-700'>Developed by Dibyendu</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
