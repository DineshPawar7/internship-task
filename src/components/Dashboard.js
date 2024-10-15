import React from 'react';
import './Dashboard.css';





const Dashboard = () => {
  return (
    <div className="content">
<div className="dashboard">
      <h2>Dashboard</h2>
    </div>
      <div className="background-image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxvOFtdgowuqnIlSZUoQMkKhfBh_res9Asg&s"
          alt="Background"
          className="background-image"
        />
        <div className="image-overlay">
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
