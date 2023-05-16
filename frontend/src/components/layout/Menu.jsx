import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu shadow-sm bg-neutral text-neutral-content w-60 p-4  h-full">
      <li className="menu-title">{/* <span>Materials</span> */}</li>
      <li>
        <Link to="/materials">Materials</Link>
      </li>
      <li className="menu-title">{/* <span>Sub Contract</span> */}</li>
      <li>
        <Link to="/sub_contract/companies">Sub-Contract</Link>
      </li>
      <li className="menu-title">{/* <span>Sub Contract</span> */}</li>
      {/* <li>
        <a>Contracts</a>
      </li> */}
    </ul>
  );
}

export default Menu;
