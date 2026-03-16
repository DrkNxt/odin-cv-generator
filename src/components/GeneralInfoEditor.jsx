import Input from "./Input";

export default function GeneralInfoEditor({ generalInfo, setGeneralInfo }) {
  return (
    <div className="general-info-editor">
      <h3>General Information</h3>
      <form>
        <Input
          label="Name"
          placeholder="John Doe"
          value={generalInfo.name}
          onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
        ></Input>
        <Input
          label="Address"
          placeholder="123 Main St, California"
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
          label="Email"
          placeholder="john.doe@example.com"
          value={generalInfo.email}
          onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}
        ></Input>
      </form>
    </div>
  );
}
