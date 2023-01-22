import React from "react";
import { useState, useEffect } from "react";
import TableComponent from "../../components/BasicTable/TableComponent";

function FittingData() {
  const [plumbingData, setPlumbingData] = useState([]);

  const FITTING_COLUMNS = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "PlumFittingInfo.id",
    },
    {
      Header: "Fitting",
      Footer: "Fitting",
      accessor: "PlumFittingInfo.PlumFitting.plumFitting",
    },
    {
      Header: "Plumbing Grade",
      Footer: "Plumbing Grade",
      accessor: "PlumFittingInfo.PlumGrade.plumGrade",
    },
    {
      Header: "Size",
      Footer: "Size",
      accessor: "PlumFittingInfo.PlumSize.plumSizeImperial",
    },
    {
      Header: "Type",
      Footer: "Type",
      accessor: "PlumFittingInfo.PlumType.plumType",
    },
    {
      Header: "Brand",
      Footer: "Brand",
      accessor: "PlumFittingInfo.PlumBrand.plumBrand",
    },
    {
      Header: "Price",
      Footer: "Price",
      accessor: "plumFittingPrice",
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
