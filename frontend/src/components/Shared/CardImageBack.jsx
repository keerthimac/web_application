import React from "react";
import { Link } from "react-router-dom";

function CardImageBack({ content }) {
  const { title, body, link, src } = content;

  console.log(title);

  return (
    <div className='card w-50 bg-base-100 shadow-xl image-full'>
      <figure>
        <img className='object-cover h-48 w-96' src={src} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{body}</p>
        <div className='card-actions justify-end'>
          <Link
            to={`/plumbing/brands/${link}`}
            className='btn btn-primary rounded-btn'>
            Go!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardImageBack;
