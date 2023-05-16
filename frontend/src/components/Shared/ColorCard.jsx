import React from "react";
import { Link } from "react-router-dom";

function ColorCard({ content }) {
  const { title, body, link } = content;

  return (
    <div className="card w-50 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link to={`/${link}`} className="btn rounded-btn">
            Go!
          </Link>
          {/* <button className='btn'>Go!</button> */}
        </div>
      </div>
    </div>
  );
}

ColorCard.defaultProps = {
  title: "Card Title",
  body: "Card Body",
};

export default ColorCard;
