import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCog, faSearch, faBell, faPlus, faBars, faExpand, faTimes,} from "@fortawesome/free-solid-svg-icons";

import Sidebar from '../components/common/Sidebar';
import Main from '../components/common/Main';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 focus:outline-none"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <img src='zohologo.png' alt='Zoho Logo' className='w-20' />
        </div>
       <Sidebar/>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 ">
        <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
          {/* Toggle Sidebar Button */}
          <button
            className="p-4 text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800"><img src='zohologo.png' alt='Zoho Logo' className='w-20' /></h2>
          <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" />
          <FontAwesomeIcon icon={faPlus} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Adding icon */}
          <FontAwesomeIcon icon={faExpand} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Fullscreen icon */}
          <FontAwesomeIcon icon={faUser} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Profile icon */}
          <FontAwesomeIcon icon={faCog} className="text-gray-600 hover:text-gray-800 transition duration-300 cursor-pointer" /> {/* Settings icon */}
        </div>
        </header>

        {/* Dashboard Content */}
        <Main/>
      </div>
    </div>
  );
};

export default Dashboard;
