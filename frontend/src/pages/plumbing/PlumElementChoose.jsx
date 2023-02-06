import React from "react";
import ColorCard from "../../components/Shared/ColorCard";

function PlumElementChoose({ src }) {
  const plumContent = [
    {
      id: 1,
      title: "PVC Fittings",
      body: "fitting Data with currnet prices",
      // src: { src },
    },
    {
      id: 2,
      title: "PVC Pipes",
      body: "fitting Data with currnet prices",
      // src: { src },
    },
    {
      id: 3,
      title: "CPVC Fittings",
      body: "fitting Data with currnet prices",
      // src: { src },
    },
    {
      id: 4,
      title: "CPVC Pipes",
      body: "fitting Data with current prices",
      // src: { src },
    },
  ];

  return (
    <div className='mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      <h1>Brand Page</h1>
      {/* {plumContent.map((item) => (
        <ColorCard key={item.id} content={item} />
      ))} */}
    </div>
  );
}

export default PlumElementChoose;
