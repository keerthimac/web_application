import React from "react";
import CardImageBack from "../../components/Shared/CardImageBack";
import { useParams } from "react-router-dom";
import slon from "../../images/plumbing/slon.jpg";
import anton from "../../images/plumbing/Anton.jpg";
import national from "../../images/plumbing/national.jpg";

function PlumBrands() {
  const content = [
    {
      id: 1,
      title: "Slon",
      body: "View Elements Brand offers and see current prices",
      link: "plumbing/brands/slon",
      src: slon,
    },
    {
      id: 2,
      title: "Anton",
      body: "compare two price versions for selected brands and elements",
      link: "plumbing/brands/anton",
      src: anton,
    },
    {
      id: 3,
      title: "National",
      body: "Compare Current prices of fittings of each brands",
      link: "plumbing/brands/national",
      src: national,
    },
  ];
  return (
    <div className='mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {content.map((item) => (
        <CardImageBack key={item.id} content={item} />
      ))}
    </div>
  );
}

export default PlumBrands;
