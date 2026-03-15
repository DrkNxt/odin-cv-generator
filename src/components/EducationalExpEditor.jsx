import { useState } from "react";
import Input from "./Input.jsx";

export default function EducationalExpEditor() {
  const [educationalExp, setEducationalExp] = useState({
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="educational-exp-editor">
      <h2>Educational Experience</h2>
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
      </form>
    </div>
  );
}
