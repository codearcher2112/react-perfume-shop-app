import "./Search.css";

export default function Search({inputValue, inputHandleChange}) {

  return (
    <div>
      <div className="search">
      <input
        type="text"
        value={inputValue}
        placeholder="Search"
        onChange={inputHandleChange}
      />
      </div>
    </div>
  );
}
