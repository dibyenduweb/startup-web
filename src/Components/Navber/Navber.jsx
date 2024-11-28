import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/webstacklogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-40 mr-2" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/projects" className="text-gray-800 hover:text-blue-600">
            Projects
            </a>
            <a href="/teams" className="text-gray-800 hover:text-blue-600">
              Our Teams
            </a>
            <a href="/aboutus" className="text-gray-800 hover:text-blue-600">
              About us
            </a>
            <a href="/service" className="text-gray-800 hover:text-blue-600">
              Service
            </a>
          </div>
          <div className="hidden md:flex">
            <a href="/contactus" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Contact us
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-100">
            <ul className="space-y-4 p-4">
              <li>
                <a href="#" className="text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-800">
                Projects
                </a>
              </li>
              <li>
              <a href="/teams" className="text-gray-800 hover:text-blue-600">
              Our Teams
            </a>
              </li>
              
              <li>
                <a href="#" className="text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-800">
                Service
                </a>
              </li>
              <li>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
