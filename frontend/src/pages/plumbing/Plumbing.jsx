import React from "react";
import ColorCard from "../../components/Shared/ColorCard";

function Plumbing() {
  const content = [
    {
      id: 1,
      title: "Brands",
      body: "View Elements Brand offers and see current prices",
      link: "plumbing/brands",
    },
    {
      id: 2,
      title: "Historical Prices",
      body: "compare two price versions for selected brands and elements",
      link: "plumbing/historical",
    },
    {
      id: 3,
      title: "Fitting Data",
      body: "Compare Current prices of fittings of each brands",
      link: "plumbing/fittingData",
    },
    {
      id: 4,
      title: "Pipe Data",
      body: "Compare Current prices of Pipes of each brands",
      link: "plumbing/pipeData",
    },
    {
      id: 5,
      title: "Add Price Lists",
      body: "Add Latest or Historical Price Lists",
      link: "plumbing/addFittingPrice",
    },
    {
      id: 6,
      title: "Add New Plumbing Data",
      body: "Create Brand new Plumbing Data",
      link: "plumbing/addData",
    },
  ];
  return (
    <div className='mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {content.map((item) => (
        <ColorCard key={item.id} content={item} />
      ))}
    </div>
  );
}

export default Plumbing;
