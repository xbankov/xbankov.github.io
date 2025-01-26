import React from "react";
import "../styles/main.scss";

const ExperienceEntry = ({ title, startdate, enddate, description, skills }) => {
  return (
    <div className="box experience-entry">
      <div className="content">
        <div className="tags are-small is-pulled-right">
          {skills && skills.map((skill, index) => (
            <span key={index} className="tag is-rounded is-primary">
              {skill}
            </span>
          ))}
        </div>
        <h3 className="title is-4">{title}</h3>
        <p className="subtitle is-6">
          {startdate} - {enddate}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceEntry;
