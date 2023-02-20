import React from "react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  getFittingList,
  getFittingPriceList,
} from "../../../features/materials/plumbing/plumbingSlice";
import { reset } from "../../../features/materials/plumbing/plumbingSlice";
import PlumbingContext from "../../../context/materials/PlumbingContext";
import Table from "../../../components/BasicTable/Table";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../components/Shared/BackButton";
import Button from "../../../components/Shared/Button";
import CardButton from "../../../components/Shared/CardButton";

function FittingData() {
  const { plumFittingTypeId, brandId } = useParams();

  const { isError, isLoading, isSuccess, message, fittingPriceList } =
    useSelector((state) => state.plumbing);

  const [filtered, setFiltered] = useState([]);

  const filteredList = (fittingPriceList) => {
    const fittingList = fittingPriceList.map((item) => {
      return {
        id: item.id,
        name: item.plum_fitting_info.plum_fitting.plum_fitting,
        image_url: item.plum_fitting_info.plum_fitting.image_url,
      };
    });
    setFiltered(fittingList);
    console.log(fittingList);
  };

  const test = [
    {
      id: 1,
      image_url: "/images/image-1676856319455.jpg",
      name: "Socket",
    },
  ];

  const dispatch = useDispatch();

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
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      filteredList(fittingPriceList);
      dispatch(reset());
    }
  }, [dispatch, isSuccess, isError]);

  useEffect(() => {
    toast.promise(
      dispatch(
        getFittingPriceList({
          fittingTypeId: plumFittingTypeId,
          brandId: brandId,
        })
      ),
      {
        pending: "Loading",
        // success: "data Fetched successfully",
        // error: "Data Fetching Failed",
      }
    );
  }, [dispatch, plumFittingTypeId, brandId]);

  return (
    <div className='h-screen '>
      <div className='flex justify-between mb-2 max-w-full'>
        <BackButton />
        <div className='flex flex-wrap justify-center gap-x-5'>
          {filtered.map((item) => {
            return <CardButton label={item.name} image_url={item.image_url} />;
          })}
        </div>
        <Button
          content={"Add Price"}
          link={`/plumbing/brands/${brandId}/fittingData/${plumFittingTypeId}/addData`}
        />
      </div>

      <Table TableColumns={FITTING_COLUMNS} parentState={fittingPriceList} />
    </div>
  );
}

export default FittingData;
