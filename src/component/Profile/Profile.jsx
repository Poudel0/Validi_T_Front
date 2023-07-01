import React, { useState } from "react";
import "./Profile.css";
import Education from "./Education/Education.jsx";
import Experience from "./Experience/Experience.jsx";
import Work from "./Work/Work.jsx";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState("");
  const [workData, setWorkData] = useState([]);
  const [educationData, setEdiucation] = useState([]);
  const [experienceData, setExperience] = useState([]);

  const updateProfileDetails = (details) => {
    setProfileDetails(details);
  };
  const updateWorkData = (data) => {
    setProfileDetails(data);
  };
  const updateEducationData = (data) => {
    setProfileDetails(data);
  };
  const updateExperienceData = (data) => {
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
        <div className="Card_Header">Work</div>
        <div className="Card_Body">
          {workData.map((work, index) => (
            <div key={index}>{work}</div>
          ))}
          <button
            onClick={() => updateWorkData(["Work 1", "Work 2", "Work 3"])}
          >
            Load Work Data
          </button>
        </div>
      </div>
      <div className="Card">
        <div className="Card_Header">Experience</div>
        <div className="Card_Body">
          {experienceData.map((exp, index) => (
            <div key={index}>{exp}</div>
          ))}
          <button
            onClick={() =>
              updateExperienceData(["Experience 1", "Experience 2"])
            }
          >
            Load Experience Data
          </button>
        </div>
      </div>
      <div className="Card">
        <div className="Card_Header">Education</div>
        <div className="Card_Body">
          <input
            type="text"
            value={profileDetails}
            onChange={(e) => updateExperienceData(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
