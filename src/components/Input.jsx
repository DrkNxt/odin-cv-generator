export default function Input({
  type = "text",
  label = "",
  value = "",
  placeholder = "",
  onChange,
}) {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} placeholder={placeholder} onChange={onChange}></input>
      </label>
    </div>
  );
}
