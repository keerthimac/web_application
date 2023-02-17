import { useState } from "react";

function FormInput(props) {
  const { id, label, onChange, ...inputProps } = props;
  // const [focused, setFocused] = useState(false);

  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  return (
    <div className='form-control flex-row'>
      <div className='mb-3 mt-3'>
        <label className='py-2 input-group input-group-vertical'>
          <span className='py-1'>{label}</span>
          <input
            className='input input-bordered'
            {...inputProps}
            onChange={onChange}
            // onBlur={handleFocus}
            // focused={focused.toString()}
          />
        </label>
      </div>
    </div>
  );
}

export default FormInput;
