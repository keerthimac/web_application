import { useState } from "react";

function FormInput(props) {
  const { id, label, onChange, ...inputProps } = props;
  // const [focused, setFocused] = useState(false);

  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  return (
    <div>
      <div className='mb-3 mt-3'>
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          // onBlur={handleFocus}
          // focused={focused.toString()}
        />
      </div>
    </div>
  );
}

export default FormInput;
