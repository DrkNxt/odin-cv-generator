import { Fragment } from "react";

export default function EducationalExp({ educationalExp }) {
  return (
    <div className="educational-exp">
      <h3>Education</h3>
      <div className="education row">
        <div className="left-column">
          <div className="date">
            {educationalExp.startDate !== ""
              ? educationalExp.startDate + " - " + educationalExp.endDate
              : educationalExp.endDate}
          </div>
          <div>{educationalExp.location}</div>
        </div>
        <div>
          <div className="bold">{educationalExp.schoolName}</div>
          <div>{educationalExp.titleOfStudy}</div>
        </div>
      </div>
    </div>
  );
}
