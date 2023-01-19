import { Container, Form } from "react-bootstrap";

function SelectForm(props) {
  const { label, errorMessage, onChange, options, labelKey, value, name } =
    props;

  // console.log(inputProps);

  return (
    <Container>
      <Form.Group className='mb-3 mt-3'>
        <Form.Label>{label}</Form.Label>
        <Form.Select name={name} onChange={onChange} value={value}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option[labelKey]}
            </option>
          ))}
        </Form.Select>
        <span>{errorMessage}</span>
      </Form.Group>
    </Container>
  );
}

export default SelectForm;
