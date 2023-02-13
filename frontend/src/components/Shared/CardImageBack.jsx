import React from "react";
import { Link } from "react-router-dom";

function CardImageBack({ content }) {
  const { title, body, link, src, buttons } = content;

  // console.log(buttons);

  return (
    <div className='card w-50 bg-base-100 shadow-xl image-full'>
      <figure>
        <img className='object-cover h-48 w-96' src={src} alt='Card' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{body}</p>
        <div className='card-actions justify-end'>
          {buttons.map((button) => (
            <Link
              key={button.id}
              // to={`/${link}`}
              to={`/${button.link}`}
              className='btn btn-primary rounded-btn'>
              {button.value}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardImageBack;
