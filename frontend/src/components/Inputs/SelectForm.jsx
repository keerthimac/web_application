function SelectForm(props) {
  const { label, errorMessage, onChange, options, labelKey, value, name } =
    props;

  // console.log(inputProps);

  return (
    <div>
      <div className='mb-3 mt-3'>
        <label>{label}</label>
        <select name={name} onChange={onChange} value={value}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option[labelKey]}
            </option>
          ))}
        </select>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
}

export default SelectForm;
