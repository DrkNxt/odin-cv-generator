import { useState } from "react";
import Input from "./Input.jsx";

export default function PracticalExpEditor() {
  const [praticalExp, setPracticalExp] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="practical-exp-editor">
      <h2>Practical Experience</h2>
      <form>
        <Input
          label="Company Name"
          placeholder="Google"
          value={praticalExp.companyName}
          onChange={(e) => setPracticalExp({ ...praticalExp, companyName: e.target.value })}
        ></Input>
        <Input
          label="Position Title"
          placeholder="Software Engineer"
          value={praticalExp.positionTitle}
          onChange={(e) => setPracticalExp({ ...praticalExp, positionTitle: e.target.value })}
        ></Input>
        <Input
          label="Main Tasks"
          placeholder="Develop and maintain web applications"
          value={praticalExp.mainTasks}
          onChange={(e) => setPracticalExp({ ...praticalExp, mainTasks: e.target.value })}
        ></Input>
        <Input
          label="Start Date"
          placeholder="January 2025"
          value={praticalExp.startDate}
          onChange={(e) => setPracticalExp({ ...praticalExp, startDate: e.target.value })}
        ></Input>
        <Input
          label="End Date"
          placeholder="Present"
          value={praticalExp.endDate}
          onChange={(e) => setPracticalExp({ ...praticalExp, endDate: e.target.value })}
        ></Input>
      </form>
    </div>
  );
}
