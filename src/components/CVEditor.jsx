import GeneralInfoEditor from "./GeneralInfoEditor.jsx";
import EducationalExpEditor from "./EducationalExpEditor.jsx";
import PracticalExpEditor from "./PracticalExpEditor.jsx";

export default function CVEditor() {
  return (
    <div className="cv-editor">
      <h1>CV Editor</h1>
      <GeneralInfoEditor></GeneralInfoEditor>
      <EducationalExpEditor></EducationalExpEditor>
      <PracticalExpEditor></PracticalExpEditor>
    </div>
  );
}
