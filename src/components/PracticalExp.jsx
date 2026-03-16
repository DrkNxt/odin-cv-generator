export default function PracticalExp({
  practicalExps = [
    {
      companyName: "Google",
      positionTitle: "Software Engineer",
      mainTasks: "Develop and maintain web applications",
      startDate: "January 2025",
      endDate: "Present",
      location: "California, USA",
    },
  ],
}) {
  return (
    <div className="practical-exp">
      <h3>Professional Experience</h3>
      {practicalExps.map((practicalExp, i) => {
        let separator = <></>;
        if (i > 0) {
          separator = <hr></hr>;
        }
        return (
          <>
            {separator}
            <div className="work row">
              <div>
                <div className="date">{practicalExp.startDate + " - " + practicalExp.endDate}</div>
                <div>{practicalExp.location}</div>
              </div>
              <div>
                <div className="bold">{practicalExp.companyName}</div>
                <div>{practicalExp.positionTitle}</div>
                <div>{practicalExp.mainTasks}</div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
