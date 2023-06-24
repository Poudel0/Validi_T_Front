import React, { useState } from "react";
import "./Profile.css";
import Education from "./Education/Education.jsx";
import Experience from "./Experience/Experience.jsx";
import Work from "./Work/Work.jsx";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState("");
  const [work, setWork] = useState([]);
  const [education, setEdiucation] = useState([]);
  const [experience, setExperience] = useState([]);

  const updateProfileDetails = (details) => {
    setProfileDetails(details);
  };
  const updateWorkDetails = (data) => {
    setProfileDetails(data);
  };
  const updateEducationDetails = (data) => {
    setProfileDetails(data);
  };
  const updateExperienceDetails = (data) => {
    setProfileDetails(data);
  };

  return (
    <section id="Profile">
      <div className="Card">
        <div className="Card_Header">Your name</div>
        <div className="Card_Body">
          <input
            type="text"
            value={profileDetails}
            onChange={(e) => updateProfileDetails(e.target.value)}
          />
        </div>
      </div>
      <div className="Card">
        <div className="Card_Header">Work History</div>
        <div className="Card_Body">
          <input
            type="text"
            value={profileDetails}
            onChange={(e) => updateProfileDetails(e.target.value)}
          />
        </div>
      </div>
      <div className="Card">
        <div className="Card_Header">Education History</div>
        <div className="Card_Body">
          <input
            type="text"
            value={profileDetails}
            onChange={(e) => updateProfileDetails(e.target.value)}
          />
        </div>
      </div>
      <div className="Card">
        <div className="Card_Header">Experience History</div>
        <div className="Card_Body">
          <input
            type="text"
            value={profileDetails}
            onChange={(e) => updateProfileDetails(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
