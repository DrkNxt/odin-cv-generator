import GeneralInfo from "./GeneralInfo.jsx";
import EducationalExp from "./EducationalExp.jsx";
import PracticalExp from "./PracticalExp.jsx";

export default function CV() {
  return (
    <div className="cv-preview">
      <GeneralInfo></GeneralInfo>
      <EducationalExp></EducationalExp>
      <PracticalExp></PracticalExp>
    </div>
  );
}
