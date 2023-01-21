import React from "react";

function GlobalFilter({ filter, setFilter }) {
  return (
    <span>
      Search:{" "}
      <input
        type='text'
        name='search'
        id='search'
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default GlobalFilter;
