import React from "react";

const FilterBySortName = (props) => {
  const handleChange = (ev) => {
    props.handleChange({
      checked: ev.currentTarget.checked,
      key: "sort",
    });
  };

  return (
    <>
      <label htmlFor="sort" className="sortLabel">
        Orden alfabético{""}
      </label>

      <input
        className="inputSort"
        name="sort"
        id="sort"
        value="sort"
        type="checkbox"
        onChange={handleChange}
        checked={props.isSort ? true : false}
      />
    </>
  );
};
export default FilterBySortName;
