import CVEditor from "./CVEditor.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    address: "123 Main St, California",
    phoneNumber: "(555) 555-5555",
    email: "john.doe@example.com",
  });
  const [educationalExp, setEducationalExp] = useState({
    schoolName: "Harvard University",
    titleOfStudy: "Bachelor of Science in Computer Science",
    startDate: "September 2020",
    endDate: "June 2024",
    location: "California, USA",
  });
  const [praticalExp, setPracticalExp] = useState({
    companyName: "Google",
    positionTitle: "Software Engineer",
    mainTasks: "Develop and maintain web applications",
    startDate: "January 2025",
    endDate: "Present",
    location: "California, USA",
  });
  return (
    <>
      <CVEditor
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educationalExp={educationalExp}
        setEducationalExp={setEducationalExp}
        practicalExp={praticalExp}
        setPracticalExp={setPracticalExp}
      />
      <CV generalInfo={generalInfo} educationalExp={educationalExp} practicalExp={praticalExp} />
    </>
  );
}
