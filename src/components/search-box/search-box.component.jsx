import "./search-box.styles.css";

export const SearchBox = ({ onChangeHandler, className, placeHolder }) => {
  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      <input
        className={`search-box ${className}`}
        placeholder={placeHolder}
        type="search"
        onChange={onChangeHandler}
      />
    </div>
  );
};
