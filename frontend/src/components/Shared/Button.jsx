import React from "react";
import { Link } from "react-router-dom";

function Button({ content, link }) {
  return (
    <Link to={link} className='mt-5 btn btn-outline btn-warning rounded-btn'>
      {content}
    </Link>
  );
}

export default Button;
