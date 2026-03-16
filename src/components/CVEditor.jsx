import GeneralInfoEditor from "./GeneralInfoEditor.jsx";
import EducationalExpEditor from "./EducationalExpEditor.jsx";
import PracticalExpEditor from "./PracticalExpEditor.jsx";

export default function CVEditor({
  generalInfo,
  setGeneralInfo,
  educationalExp,
  setEducationalExp,
  practicalExp,
  setPracticalExp,
}) {
  return (
    <div className="cv-editor">
      <h2>CV Editor</h2>
      <GeneralInfoEditor
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      ></GeneralInfoEditor>
      <EducationalExpEditor
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
      ></EducationalExpEditor>
      <PracticalExpEditor
        practicalExp={practicalExp}
        setPracticalExp={setPracticalExp}
      ></PracticalExpEditor>
    </div>
  );
}
