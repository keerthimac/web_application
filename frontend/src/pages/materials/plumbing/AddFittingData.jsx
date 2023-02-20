import React from "react";
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormInput from "../../../components/Inputs/FormInput";
import { useParams } from "react-router-dom";
import BackButton from "../../../components/Shared/BackButton";
import Button from "../../../components/Shared/Button";

export default function AddFittingData() {
  const [pressureFittingInfo, setPressureFittingInfo] = useState([]);
  const [pressureFittingPrice, setPressureFittingPrice] = useState([]);
  const [revisionDate, setRevisionDate] = useState("");

  const {
    isError,
    isLoading,
    isSuccess,
    message,
    fittingList,
    fittingPriceList,
  } = useSelector((state) => state.plumbing);

  const { brandId } = useParams();

  useEffect(() => {
    setFittingList();
  }, [fittingPriceList]);

  const setFittingList = () => {
    try {
      const priceArr = fittingPriceList.map((price) => {
        return {
          id: price.plum_fitting_info.id,
          fittingPrice: "",
        };
      });

      const inputArr = fittingPriceList.map((obj) => {
        return {
          id: obj.id,
          placeholder: `price`,
          label: `${obj.plum_fitting_info.plum_fitting.plum_fitting} ${obj.plum_fitting_info.plum_size.plum_size_metric}`,
          type: "number",
          // required: true,
          name: `${obj.plum_fitting_info.plum_fitting.plum_fitting}_${obj.plum_fitting_info.plum_size.plum_size_metric}`,
        };
      });
      setPressureFittingInfo(inputArr);
      setPressureFittingPrice(priceArr);
      // console.log(priceArr);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleChange = (e, id) => {
    const newPrices = [...pressureFittingPrice];
    const index = newPrices.findIndex((price) => price.id === id);
    newPrices[index] = { id, fittingPrice: e.target.value };
    setPressureFittingPrice(newPrices);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const revisionData = {
      revisionDate,
      pressureFittingPrice,
      brandId,
    };
    console.log(revisionData);
  };

  return (
    // <div>
    //   <h1>Testing</h1>
    // </div>
    <div>
      <div className='flex justify-start mb-1'>
        <BackButton />
      </div>
      <form onSubmit={onSubmit}>
        <div className='flex justify-between my-5'>
          <label className='input-group input-group-vertical w-full max-w-xs'>
            <span>Revision Date</span>
            <input
              onChange={(e) => setRevisionDate(e.target.value)}
              name='revisionDate'
              required
              type='date'
              placeholder='info@site.com'
              className='input input-bordered'
            />
          </label>
          <button className='mt-5 btn btn-outline btn-warning rounded-btn'>
            Submit
          </button>
        </div>
        {/* <input
        type='date'
        className='mt-5 input input-bordered w-full max-w-xs'
      /> */}

        <div className='max-h-screen outline outline-offset-8 outline-gray-600 overflow-y-scroll overflow-x-hidden mt-5 grid grid-cols-1 gap-x-8 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {pressureFittingInfo.map((data) => (
            <FormInput
              key={data.id}
              {...data}
              onChange={(event) => handleChange(event, data.id)}
            />
          ))}
        </div>
      </form>
    </div>
  );
}
