export default function Input({ label = "", value = "", placeholder = "", onChange }) {
  return (
    <div className="input">
      <label>
        {label}
        <textarea value={value} placeholder={placeholder} onChange={onChange} rows="4"></textarea>
      </label>
    </div>
  );
}
