import React from "react";
import { useParams } from "react-router-dom";
import ColorCard from "../../../components/Shared/ColorCard";
import BackButton from "../../../components/Shared/BackButton";

function PlumElementChoose() {
  const { brandId } = useParams();
  const content = [
    {
      id: 1,
      title: "Pipe Data",
      body: "View Pipe Prices, Add Pipe Prices & Add Pipe Data",
      link: `plumbing/brands/${brandId}/pipeData`,
    },
    {
      id: 2,
      title: "Fitting Data",
      body: "View Fitting Prices, Add Fitting Prices & Add Fitting Data",
      link: `plumbing/brands/${brandId}/fittingData`,
    },
  ];
  return (
    <div>
      <BackButton />
      <div className='mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {content.map((item) => (
          <ColorCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default PlumElementChoose;
