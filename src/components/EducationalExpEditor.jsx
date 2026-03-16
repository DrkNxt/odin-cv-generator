import Input from "./Input.jsx";

export default function EducationalExpEditor({ educationalExp, setEducationalExp }) {
  return (
    <div className="educational-exp-editor">
      <h3>Education</h3>
      <form>
        <Input
          label="School Name"
          placeholder="Harvard University"
          value={educationalExp.schoolName}
          onChange={(e) => setEducationalExp({ ...educationalExp, schoolName: e.target.value })}
        ></Input>
        <Input
          label="Title of Study"
          placeholder="Bachelor of Science in Computer Science"
          value={educationalExp.titleOfStudy}
          onChange={(e) => setEducationalExp({ ...educationalExp, titleOfStudy: e.target.value })}
        ></Input>
        <Input
          label="Location"
          placeholder="California, USA"
          value={educationalExp.location}
          onChange={(e) => setEducationalExp({ ...educationalExp, location: e.target.value })}
        ></Input>
        <div className="date-input">
          <Input
            label="Start Date"
            placeholder="September 2020"
            value={educationalExp.startDate}
            onChange={(e) => setEducationalExp({ ...educationalExp, startDate: e.target.value })}
          ></Input>
          <Input
            label="End Date"
            placeholder="June 2024"
            value={educationalExp.endDate}
            onChange={(e) => setEducationalExp({ ...educationalExp, endDate: e.target.value })}
          ></Input>
        </div>
      </form>
    </div>
  );
}
