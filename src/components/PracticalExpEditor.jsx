import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

export default function PracticalExpEditor({ practicalExp, setPracticalExp }) {
  return (
    <div className="practical-exp-editor">
      <h3>Professional Experience</h3>
      <form>
        <Input
          label="Company Name"
          placeholder="Google"
          value={practicalExp.companyName}
          onChange={(e) => setPracticalExp({ ...practicalExp, companyName: e.target.value })}
        ></Input>
        <Input
          label="Position Title"
          placeholder="Software Engineer"
          value={practicalExp.positionTitle}
          onChange={(e) => setPracticalExp({ ...practicalExp, positionTitle: e.target.value })}
        ></Input>
        <Input
          label="Location"
          placeholder="California, USA"
          value={practicalExp.location}
          onChange={(e) => setPracticalExp({ ...practicalExp, location: e.target.value })}
        ></Input>
        <div className="date-input">
          <Input
            label="Start Date"
            placeholder="January 2025"
            value={practicalExp.startDate}
            onChange={(e) => setPracticalExp({ ...practicalExp, startDate: e.target.value })}
          ></Input>
          <Input
            label="End Date"
            placeholder="Present"
            value={practicalExp.endDate}
            onChange={(e) => setPracticalExp({ ...practicalExp, endDate: e.target.value })}
          ></Input>
        </div>
        <TextArea
          label="Main Tasks"
          placeholder="Develop and maintain web applications"
          value={practicalExp.mainTasks}
          onChange={(e) => setPracticalExp({ ...practicalExp, mainTasks: e.target.value })}
        ></TextArea>
      </form>
    </div>
  );
}
