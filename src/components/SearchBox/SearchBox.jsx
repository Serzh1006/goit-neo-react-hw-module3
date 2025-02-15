import css from "./searchbox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrapFilter}>
      <label>
        Find contacts by name
        <input
          className={css.filterText}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
