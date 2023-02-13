import React from "react";
import { useEffect, useContext } from "react";
import PlumbingContext from "../../../context/materials/PlumbingContext";
import TableComponent from "../../../components/BasicTable/TableComponent";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../components/Shared/BackButton";
import Button from "../../../components/Shared/Button";

function FittingData() {
  const { fittingPriceList, getFittingPriceList, getFittingList } =
    useContext(PlumbingContext);

  const { plumFittingTypeId, brandId } = useParams();
  const test = useParams();
  console.log(test);

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
      accessor: "plum_fitting_info.plum_fitting_type.plum_fitting_type",
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

  useEffect(() => {
    getFittingPriceList(plumFittingTypeId, brandId);
    getFittingList(plumFittingTypeId);
  }, []);

  return (
    <div className='h-screen mt-5'>
      <div className='flex justify-between mb-10'>
        <BackButton />
        <Button
          content={"Add Price"}
          link={`/plumbing/brands/${brandId}/fittingData/${plumFittingTypeId}/addData`}
        />
      </div>
      <TableComponent
        TableColumns={FITTING_COLUMNS}
        parentState={fittingPriceList}
      />
    </div>
  );
}

export default FittingData;
