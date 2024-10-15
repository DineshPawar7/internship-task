import React from 'react';
import './ProfileCard.css';
import ItsDinesh from '../assets/images/ItsDinesh.png'; // No hyphen in variable names!

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={ItsDinesh} // No quotes here, just the variable
        alt="User"
        className="profile-image"
      />
      <h4>Dinesh Pawar</h4>
    </div>
  );
};

export default ProfileCard;
