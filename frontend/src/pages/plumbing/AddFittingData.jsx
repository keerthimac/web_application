import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import FormInput from "../../components/Inputs/FormInput";

export default function AddFittingData() {
  const [pressureFittingInfo, setPressureFittingInfo] = useState([
    {
      id: 1,
      name: "clientName",
      type: "text",
      placeholder: "Client Name",
      label: "Client Name",
      required: true,
    },
  ]);
  const [pressureFittingPrice, setPressureFittingPrice] = useState([]);

  useEffect(() => {
    getPressureFittingList();
  }, []);

  const getPressureFittingList = async () => {
    try {
      const response = await fetch("/api/plumbing/pressure_fitting_info");
      const data = await response.json();
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
          label: `${obj.plum_fitting.plum_fitting} ${obj.plum_size.plum_size_imperial}`,
          type: "number",
          required: true,
          name: `${obj.plum_fitting.plum_fitting}_${obj.plum_size.plum_size_imperial}`,
        };
      });
      setPressureFittingInfo(inputArr);
      setPressureFittingPrice(priceArr);
      console.log(inputArr);
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
    <Container>
      <Form>
        <Form.Group className='mb-3 mt-3'>
          {pressureFittingInfo.map((data) => (
            <FormInput
              key={data.id}
              {...data}
              onChange={(event) => handleChange(event, data.id)}
            />
          ))}
        </Form.Group>
      </Form>
    </Container>
  );
}
