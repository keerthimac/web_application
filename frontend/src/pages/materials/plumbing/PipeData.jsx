import React from "react";
import { useState, useEffect } from "react";
import TableComponent from "../../components/BasicTable/TableComponent";

function PipeData() {
  const [plumbingData, setPlumbingData] = useState([]);

  const PIPE_COLUMNS = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "id",
    },
    {
      Header: "Type",
      Footer: "Type",
      accessor: "PlumType.plumType",
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
      Header: "Pipe End Type",
      Footer: "Pipe End Type",
      accessor: "PlumPipeEndType.plumPipeEndType",
    },
    {
      Header: "Length",
      Footer: "Length",
      accessor: "plumPipeLengthMetric",
    },
  ];

  const getPlumbingList = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/plumbing/pipe");
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
      <TableComponent TableColumns={PIPE_COLUMNS} parentState={plumbingData} />
    </div>
  );
}

export default PipeData;
