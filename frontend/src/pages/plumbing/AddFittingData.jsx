import React from "react";
import { useState, useEffect } from "react";
import FormInput from "../../components/Inputs/FormInput";
import { Link } from "react-router-dom";

export default function AddFittingData() {
  const [pressureFittingInfo, setPressureFittingInfo] = useState([]);
  const [pressureFittingPrice, setPressureFittingPrice] = useState([]);

  useEffect(() => {
    getPressureFittingList();
  }, []);

  const getPressureFittingList = async () => {
    try {
      const response = await fetch(
        "/api/plumbing/fitting/pressure_fittings/slon"
      );
      const data = await response.json();
      console.log(data);

      const priceArr = data.map((price) => {
        return {
          id: price.id,
          fittingPrice: "",
        };
      });

      const inputArr = data.map((obj) => {
        return {
          id: obj.id,
          placeholder: `price`,
          label: `${obj.plum_fitting_info.plum_fitting.plum_fitting} ${obj.plum_fitting_info.plum_size.plum_size_metric}`,
          type: "number",
          required: true,
          name: `${obj.plum_fitting_info.plum_fitting.plum_fitting}_${obj.plum_fitting_info.plum_size.plum_size_metric}`,
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

  return (
    // <div>
    //   <h1>Testing</h1>
    // </div>
    <div className=' mt-10 '>
      <Link to='/plumbing' className='btn btn-outline btn-warning rounded-btn'>
        Back
      </Link>
      <form>
        <div className='max-h-screen outline outline-offset-8 outline-gray-600 overflow-y-scroll overflow-x-hidden mt-10 grid grid-cols-1 gap-x-8 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
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
