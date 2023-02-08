import React from "react";
import { useState, useEffect } from "react";
import TableComponent from "../../components/BasicTable/TableComponent";
import { Link, useParams } from "react-router-dom";

function FittingData() {
  const [plumbingData, setPlumbingData] = useState([]);

  let { id } = useParams();

  const FITTING_COLUMNS = [
    {
      Header: "Id",
      Footer: "Id",
      accessor: "plum_fitting_info.id",
    },
    {
      Header: "Fitting",
      Footer: "Fitting",
      accessor: "plum_fitting_info.plum_fitting.plum_fitting",
    },
    {
      Header: "Plumbing Grade",
      Footer: "Plumbing Grade",
      accessor: "plum_fitting_info.plum_grade.plum_grade",
    },
    {
      Header: "Size",
      Footer: "Size",
      accessor: "plum_fitting_info.plum_size.plum_size_metric",
    },
    {
      Header: "Type",
      Footer: "Type",
      accessor: "plum_fitting_info.plum_type.plum_type",
    },
    {
      Header: "Brand",
      Footer: "Brand",
      accessor: "brand.brand",
    },
    {
      Header: "Price",
      Footer: "Price",
      accessor: "plum_fitting_price",
      Cell: ({ value }) => {
        let number = Number(value);
        let formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "LKR",
        });
        return formatter.format(number);
      },
    },
  ];

  const getPlumbingList = async () => {
    try {
      const response = await fetch("/api/plumbing/fitting");
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
    <div className='h-screen mt-5'>
      <h1>{id}</h1>
      <div className='flex justify-end'>
        {/* <Link
          to='/plumbing/addfittingprice'
          className='btn btn-ghost btn-sm rounded-btn'>
          Add Plumbing Prices
        </Link>
        <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
          Add Plumbing Info
        </Link> */}
      </div>
      <TableComponent
        TableColumns={FITTING_COLUMNS}
        parentState={plumbingData}
      />
    </div>
  );
}

export default FittingData;
