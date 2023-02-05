import { useState } from "react";
import FormInput from "../../components/Inputs/FormInput";
import LocationComponent from "../../components/LocationComponent";
import SelectForm from "../../components/Inputs/SelectForm";

function SubPaymentsAdd() {
  const [subPaymentInfo, setSubPaymentInfo] = useState({
    subContract: "",
    subPayment: "",
  });
  const [subContract, setSubContract] = useState([
    { id: 0, label: "No Options" },
    { id: 1, label: "test 01" },
  ]);

  const paymentForm = [
    {
      id: 1,
      name: "subPayment",
      type: "number",
      placeholder: "Please Enter the payment",
      label: "Payment",
      required: true,
    },
  ];

  const onChange = (e) => {
    setSubPaymentInfo({
      ...subPaymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <div className='mb-3 mt-3'>
          <SelectForm
            label='Sub Contract'
            onChange={onChange}
            options={subContract}
            labelKey='label' // depend on api data
            value={subPaymentInfo.subContract}
            name='subContract'
          />
          {paymentForm.map((data) => (
            <FormInput
              key={data.id}
              {...data}
              value={subPaymentInfo[data.name]}
              onChange={onChange}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default SubPaymentsAdd;
