import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { RiComputerLine } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { FaArrowTurnDown } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="website-name">Dinesh Pawar</h1><RxDashboard className='dashboard-icon'/>
      </div>

      
      <div className="main-menu">
        <div className='general-dashboard'>
        <h2 className="menu-title">General</h2>
        <h4 className='menu-dboard'>Dashboard</h4>
        </div>
        


        <ul>
          <li>
          <RiComputerLine className="sidebar-icon" />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <FaList className="sidebar-icon" />
          <Link to="/transactions">Transactions</Link>
          </li>
          <li>
          <FaArrowTurnDown className="sidebar-icon" />
          <Link to="/starthere">Start Here</Link>
          </li>
          <li>
            <AiOutlineQuestionCircle className="sidebar-icon" />
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <IoBookOutline className="sidebar-icon" />
            <Link to="/learningmodules">Learning Modules</Link>
            </li>
            <li>
            <FaRegStar className="sidebar-icon" />
            <Link to="/rewards">Rewards</Link>
          </li>
          <li>
            <MdOutlineFeedback className="sidebar-icon" />
            <Link to="/feedback">Feedback</Link>
          </li>
          
        </ul>
      </div>

  
      
    </aside>
  );
};

export default Sidebar;
