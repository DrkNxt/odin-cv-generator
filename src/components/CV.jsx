import GeneralInfo from "./GeneralInfo.jsx";
import EducationalExp from "./EducationalExp.jsx";
import PracticalExp from "./PracticalExp.jsx";

export default function CV({ generalInfo, educationalExp, practicalExp }) {
  return (
    <div className="cv-preview">
      <GeneralInfo generalInfo={generalInfo}></GeneralInfo>
      <EducationalExp educationalExp={educationalExp}></EducationalExp>
      <PracticalExp practicalExp={practicalExp}></PracticalExp>
    </div>
  );
}
