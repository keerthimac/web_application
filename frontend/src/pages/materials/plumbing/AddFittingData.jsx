import React from "react";
import { useState, useEffect, useContext } from "react";
import PlumbingContext from "../../../context/materials/PlumbingContext";
import FormInput from "../../../components/Inputs/FormInput";
import { useParams } from "react-router-dom";
import BackButton from "../../../components/Shared/BackButton";

export default function AddFittingData() {
  const [pressureFittingInfo, setPressureFittingInfo] = useState([]);
  const [pressureFittingPrice, setPressureFittingPrice] = useState([
    { revisionDate: null },
  ]);

  const { fittingList, getFittingList } = useContext(PlumbingContext);

  const { plumFittingTypeId } = useParams();
  console.log(plumFittingTypeId);

  useEffect(() => {
    setFittingList();
  }, []);

  const setFittingList = () => {
    try {
      const priceArr = fittingList.map((price) => {
        return {
          id: price.id,
          fittingPrice: "",
        };
      });

      const inputArr = fittingList.map((obj) => {
        return {
          id: obj.id,
          placeholder: `price`,
          label: `${obj.plum_fitting.plum_fitting} ${obj.plum_size.plum_size_metric}`,
          type: "number",
          required: true,
          name: `${obj.plum_fitting.plum_fitting}_${obj.plum_size.plum_size_metric}`,
        };
      });
      setPressureFittingInfo(inputArr);
      setPressureFittingPrice(priceArr);
      console.log(priceArr);
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

  const handleDate = (e) => {
    const date = e.target.value;
    setPressureFittingPrice([...pressureFittingPrice, { revisionDate: date }]);
  };

  return (
    // <div>
    //   <h1>Testing</h1>
    // </div>
    <div>
      <div className='flex justify-start mb-1'>
        <BackButton />
      </div>
      <div className='my-5'>
        <label className='input-group input-group-vertical w-full max-w-xs'>
          <span>Revision Date</span>
          <input
            onChange={(e) => handleDate(e)}
            // value={}
            type='date'
            placeholder='info@site.com'
            className='input input-bordered'
          />
        </label>
      </div>
      {/* <input
        type='date'
        className='mt-5 input input-bordered w-full max-w-xs'
      /> */}
      <form>
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
