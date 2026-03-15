import { useState } from "react";
import Input from "./Input";

export default function GeneralInfoEditor() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <div className="general-info-editor">
      <h2>General Information</h2>
      <form>
        <Input
          label="First Name"
          placeholder="John"
          value={generalInfo.firstName}
          onChange={(e) => setGeneralInfo({ ...generalInfo, firstName: e.target.value })}
        ></Input>
        <Input
          label="Last Name"
          placeholder="Doe"
          value={generalInfo.lastName}
          onChange={(e) => setGeneralInfo({ ...generalInfo, lastName: e.target.value })}
        ></Input>
        <Input
          label="Address"
          placeholder="123 Main St"
          value={generalInfo.address}
          onChange={(e) => setGeneralInfo({ ...generalInfo, address: e.target.value })}
        ></Input>
        <Input
          label="Phone Number"
          placeholder="(555) 555-5555"
          value={generalInfo.phoneNumber}
          onChange={(e) => setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value })}
        ></Input>
        <Input
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
          value={generalInfo.email}
          onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}
        ></Input>
      </form>
    </div>
  );
}
