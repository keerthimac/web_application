import { useState } from "react";
import { Container, Form } from "react-bootstrap";

function FormInput(props) {
  const { id, label, onChange, ...inputProps } = props;
  // const [focused, setFocused] = useState(false);

  // const handleFocus = (e) => {
  //   setFocused(true);
  // };

  return (
    <Container>
      <Form.Group className='mb-3 mt-3'>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...inputProps}
          onChange={onChange}
          // onBlur={handleFocus}
          // focused={focused.toString()}
        />
      </Form.Group>
    </Container>
  );
}

export default FormInput;
