import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className='menu shadow-sm bg-neutral text-neutral-content w-40 p-5  h-full'>
      <li className='menu-title'>
        <span>Materials</span>
      </li>
      <li>
        <Link to='/plumbing'>Plumbing</Link>
      </li>
      <li>
        <a>Electrical</a>
      </li>
      <li>
        <a>Tiles</a>
      </li>
      <li>
        <a>Cement</a>
      </li>
      <li>
        <a>Steel</a>
      </li>
      <li className='menu-title'>
        <span>Sub Contract</span>
      </li>
      <li>
        <a>Companies</a>
      </li>
      <li>
        <a>Contracts</a>
      </li>
    </ul>
  );
}

export default Menu;
