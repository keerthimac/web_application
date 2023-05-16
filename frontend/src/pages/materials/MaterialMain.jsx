import React from "react";
import ColorCard from "../../components/Shared/ColorCard";

function Plumbing() {
  const structural = [
    {
      id: 1,
      title: "Cement",
      body: "",
      link: "cement",
    },
    {
      id: 2,
      title: "Sand",
      body: "",
      link: "sand",
    },
    {
      id: 3,
      title: "Aggregate",
      body: "",
      link: "aggregate",
    },
    {
      id: 4,
      title: "Steel",
      body: "",
      link: "steel",
    },
  ];
  const service = [
    {
      id: 5,
      title: "Plumbing",
      body: "",
      link: "plumbing",
    },
    {
      id: 6,
      title: "Electrical",
      body: "",
      link: "electrical",
    },
  ];
  const finishes = [
    {
      id: 7,
      title: "Paint",
      body: "",
      link: "paint",
    },
    {
      id: 8,
      title: "Tiles",
      body: "",
      link: "tiles",
    },
    {
      id: 9,
      title: "Other Finishes Materials",
      body: "",
      link: "otherfinish",
    },
  ];
  const other = [
    {
      id: 10,
      title: "adhesive",
      body: "",
      link: "adhesive",
    },
    {
      id: 11,
      title: "Grinder Wheels",
      body: "",
      link: "grinderwheel",
    },
    {
      id: 12,
      title: "Sand Papers",
      body: "",
      link: "sandpaper",
    },
  ];
  return (
    <>
      <div>
        <h2 className="h-2 text-lg font-bold mt-5 mb-6">
          Structural Materials
        </h2>
        <div className="mt-5 mb-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {structural.map((item) => (
            <ColorCard key={item.id} content={item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="h-2 text-lg font-bold mt-5 mb-6">Service Materials</h2>
        <div className="mt-5 mb-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {service.map((item) => (
            <ColorCard key={item.id} content={item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="h-2 text-lg font-bold mt-5 mb-6">Finishes Materials</h2>
        <div className="mt-5 mb-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {finishes.map((item) => (
            <ColorCard key={item.id} content={item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="h-2 text-lg font-bold mt-5 mb-6">
          other Necessary Materials
        </h2>
        <div className="mt-5 mb-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {other.map((item) => (
            <ColorCard key={item.id} content={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Plumbing;
