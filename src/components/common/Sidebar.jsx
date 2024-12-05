import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faPhone, faHandshake, faBullhorn, faFileInvoice , faEnvelope, faChartLine, faUserCircle, faChartBar, faClipboardList, faBoxOpen,  faChartPie,  faCalendarAlt,  faTasks, faBriefcase,  faTimes, faSignOutAlt, } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  return (
    <nav className="mt-4 h-screen overflow-y-auto">
          {[
            { name: 'Home', icon: faHome },
            { name: 'Lead', icon: faPhone  },
            { name: 'Contact', icon: faUser },
            { name: 'Account', icon: faBriefcase },
            { name: 'Deal', icon: faHandshake  },
            { name: 'Task', icon: faTasks },
            { name: 'Meetings', icon: faCalendarAlt },
            { name: 'Call', icon: faPhone },
            { name: 'Reports', icon: faChartBar },
            { name: 'Analytics', icon: faChartPie },
            { name: 'Services', icon: faClipboardList },
            { name: 'Products', icon: faBoxOpen },
            { name: 'Role', icon: faUserCircle },
            { name: 'Activity', icon: faChartLine },
            { name: 'Campaign', icon: faBullhorn },
            { name: 'Email', icon: faEnvelope },
            { name: 'Quote', icon: faHome },
            { name: 'Lead', icon: faFileInvoice },
            { name: 'Profile', icon: faUser },
            { name: 'Settings', icon: faCog },
            { name: 'Logout', icon: faSignOutAlt }
          ].map((item) => (
            <Link
            key={item.name}
            to={`/${item.name.toLowerCase()}`}
            className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300"
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            <span>{item.name}</span>
          </Link>
          ))}
        </nav>
  )
}

export default Sidebar