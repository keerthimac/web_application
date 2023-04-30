import React from "react";
import ColorCard from "../../../components/Shared/ColorCard";

function SubContract() {
  const content = [
    {
      id: 1,
      title: "Add Payments To Sub Contract",
      body: "This section can add Advance, Bill Payments to the sub contracts",
      link: "plumbing/subPaymentsAdd",
    },
    {
      id: 2,
      title: "Sub Contract Company List",
      body: "View Sub Contract Company List",
      link: "subContract/subCompanyList",
    },
    {
      id: 3,
      title: "Add Sub Contract Company",
      body: "This Section Add New Sub contract Company. Only Admins Permitted to Do So",
      link: "subContract/subCompanyAddInfo",
    },
    {
      id: 4,
      title: "Add Sub Contract",
      body: "This section can add sub contracts with connecting the subtract company and projects",
      link: "plumbing/subContractAddInfo",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {content.map((item) => (
        <ColorCard key={item.id} content={item} />
      ))}
    </div>
  );
}

export default SubContract;
