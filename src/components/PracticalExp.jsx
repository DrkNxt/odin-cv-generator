import { Fragment } from "react";

export default function PracticalExp({ practicalExp }) {
  return (
    <div className="practical-exp">
      <h3>Professional Experience</h3>
      <div className="work row">
        <div className="left-column">
          <div className="date">
            {practicalExp.startDate !== ""
              ? practicalExp.startDate + " - " + practicalExp.endDate
              : practicalExp.endDate}
          </div>
          <div>{practicalExp.location}</div>
        </div>
        <div>
          <div className="bold">{practicalExp.companyName}</div>
          <div>{practicalExp.positionTitle}</div>
          <div>{practicalExp.mainTasks}</div>
        </div>
      </div>
    </div>
  );
}
