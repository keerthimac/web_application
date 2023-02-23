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
import TableV2 from "../../../components/BasicTable/TableV2";
import { Link, useParams } from "react-router-dom";
import BackButton from "../../../components/Shared/BackButton";
import Button from "../../../components/Shared/Button";
import CardButton from "../../../components/Shared/CardButton";

function FittingData() {
  const { plumFittingTypeId, brandId } = useParams();

  const { isError, isLoading, isSuccess, message, fittingPriceList } =
    useSelector((state) => state.plumbing);

  const [filtered, setFiltered] = useState([]);
  const [buttonState, setButtonState] = useState(0);

  const filteredList = (fittingPriceList) => {
    const dupFilList = fittingPriceList.filter(
      (obj, index, self) =>
        index ===
        self.findIndex(
          (item) =>
            item.plum_fitting_info.plum_fitting.plum_fitting ===
            obj.plum_fitting_info.plum_fitting.plum_fitting
        )
    );
    const fittingList = dupFilList.map((item) => {
      return {
        id: item.id,
        socketId: item.plum_fitting_info.plum_fitting.id,
        name: item.plum_fitting_info.plum_fitting.plum_fitting,
        image_url: item.plum_fitting_info.plum_fitting.image_url,
      };
    });
    setFiltered(fittingList);
  };

  const dispatch = useDispatch();

  const FITTING_COLUMNS = [
    {
      Header: "fittingID",

      accessor: "plum_fitting_info.plum_fitting.id",
      show: false,
      filter: "equals",
    },
    {
      Header: "Id",
      accessor: "plum_fitting_info.id",
      show: false,
    },
    {
      Header: "Fitting",
      accessor: "plum_fitting_info.plum_fitting.plum_fitting",
    },
    {
      Header: "Plumbing Grade",
      accessor: "plum_fitting_info.plum_grade.plum_grade",
    },
    {
      Header: "Size",
      accessor: "plum_fitting_info.plum_size.plum_size_metric",
    },
    {
      Header: "Type",
      accessor: "plum_fitting_info.plum_fitting_type.plum_fitting_type",
      show: false,
    },
    {
      Header: "Brand",
      accessor: "brand.brand",
      show: false,
    },
    {
      Header: "Price",
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

  function handleClick(event) {
    // Access the button element and its properties using the event object
    setButtonState(parseInt(event.currentTarget.title, 10));
  }

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
            return (
              <CardButton
                key={item.id}
                label={item.name}
                image_url={item.image_url}
                handleClick={handleClick}
                id={item.socketId}
              />
            );
          })}
        </div>
        <Button
          content={"Add Price"}
          link={`/plumbing/brands/${brandId}/fittingData/${plumFittingTypeId}/addData`}
        />
      </div>

      <TableV2
        TableColumns={FITTING_COLUMNS}
        parentState={fittingPriceList}
        filterState={buttonState}
      />
    </div>
  );
}

export default FittingData;
