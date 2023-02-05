import React from "react";
import CardImageBack from "../../components/Shared/CardImageBack";

function PlumBrands() {
  const content = [
    {
      id: 1,
      title: "Slon",
      clild: [
        {
          id: 1,
          title: "PVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 2,
          title: "PVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 3,
          title: "CPVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 4,
          title: "CPVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
      ],
      body: "View Elements Brand offers and see current prices",
      link: "/plumbing/brands",
      src: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Anton",
      body: "compare two price versions for selected brands and elements",
      link: "/plumbing/historical",
      clild: [
        {
          id: 1,
          title: "PVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 2,
          title: "PVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 3,
          title: "CPVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 4,
          title: "CPVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
      ],
      src: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "National",
      clild: [
        {
          id: 1,
          title: "PVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 2,
          title: "PVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 3,
          title: "CPVC Fittings",
          body: "fitting Data with currnet prices",
          src: "",
        },
        {
          id: 4,
          title: "CPVC Pipes",
          body: "fitting Data with currnet prices",
          src: "",
        },
      ],
      body: "Compare Current prices of fittings of each brands",
      link: "/plumbing/fittingData",
      src: "data:image/jpeg;base64,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",
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
