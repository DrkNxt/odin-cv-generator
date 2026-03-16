export default function EducationalExp({
  educationalExps = [
    {
      schoolName: "University",
      titleOfStudy: "Bachelor of Science in Computer Science",
      startDate: "September 2020",
      endDate: "June 2024",
      location: "California, USA",
    },

    {
      schoolName: "University",
      titleOfStudy: "Master of Science in Computer Science",
      startDate: "September 2024",
      endDate: "June 2026",
      location: "California, USA",
    },
  ],
}) {
  return (
    <div className="educational-exp">
      <h3>Education</h3>
      {educationalExps.map((educationExp, i) => {
        let separator = <></>;
        if (i > 0) {
          separator = <hr></hr>;
        }
        return (
          <>
            {separator}
            <div className="education row">
              <div>
                <div className="date">{educationExp.startDate + " - " + educationExp.endDate}</div>
                <div>{educationExp.location}</div>
              </div>
              <div>
                <div className="bold">{educationExp.schoolName}</div>
                <div>{educationExp.titleOfStudy}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
