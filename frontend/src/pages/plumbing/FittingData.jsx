import React from "react";
import { useState, useEffect } from "react";
import TableComponent from "../../components/BasicTable/TableComponent";

function FittingData() {
  const [plumbingData, setPlumbingData] = useState([]);

  const FITTING_COLUMNS = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "id",
    },
    {
      Header: "Fitting",
      Footer: "Fitting",
      accessor: "PlumFitting.plumFitting",
    },
    {
      Header: "Plumbing Grade",
      Footer: "Plumbing Grade",
      accessor: "PlumGrade.plumGrade",
    },
    {
      Header: "Size",
      Footer: "Size",
      accessor: "PlumSize.plumSizeImperial",
    },
    {
      Header: "Type",
      Footer: "Type",
      accessor: "PlumType.plumType",
    },
  ];

  const getPlumbingList = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/plumbing/fitting"
      );
      const data = await response.json();
      setPlumbingData(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPlumbingList();
  }, []);

  return (
    <div>
      <TableComponent
        TableColumns={FITTING_COLUMNS}
        parentState={plumbingData}
      />
    </div>
  );
}

export default FittingData;
