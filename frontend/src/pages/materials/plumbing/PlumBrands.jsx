import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { getBrandList } from "../../../features/materials/plumbing/plumbingSlice";
import { reset } from "../../../features/materials/plumbing/plumbingSlice";

import CardImageBack from "../../../components/Shared/CardImageBack";
import BackButton from "../../../components/Shared/BackButton";

function PlumBrands() {
  const { isError, isLoading, isSuccess, message, brands } = useSelector(
    (state) => state.plumbing
  );

  const dispatch = useDispatch();

  useEffect(() => {
    toast.promise(dispatch(getBrandList()), {
      pending: "Loading",
      // success: "data Fetched successfully",
      error: message,
    });
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
        {brands.map((item) => (
          <CardImageBack key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default PlumBrands;
