import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getBrandElementList } from "../../../features/materials/plumbing/plumbingSlice";
import { reset } from "../../../features/materials/plumbing/plumbingSlice";

import CardImageBack from "../../../components/Shared/CardImageBack";
import BackButton from "../../../components/Shared/BackButton";

function PlumTypeChoose() {
  const { brandId, plumType } = useParams();
  console.log(plumType);

  const { isError, isLoading, isSuccess, message, elements } = useSelector(
    (state) => state.plumbing
  );

  const dispatch = useDispatch();

  useEffect(() => {
    toast.promise(
      dispatch(getBrandElementList({ plumType: plumType, brandId: brandId })),
      {
        pending: "Loading",
        // success: "data Fetched successfully",
        // error: "Data Fetching Failed",
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch, isSuccess, isError]);

  return (
    <div>
      <BackButton />
      <div className='mt-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {elements.map((item) => (
          <CardImageBack key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default PlumTypeChoose;
