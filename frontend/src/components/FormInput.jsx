import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";

function FormInput() {
  const [formInputs, setFormInputs] = useState({
    subContract: "",
    advance: "",
  });
  const [subContracts, setSubContracts] = useState([
    { id: 1, subContract: "One" },
    { id: 2, subContract: "Two" },
    { id: 3, subContract: "Three" },
  ]);

  const { subContract, advance } = formInputs;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Form>
        <Form.Label>Sub Contract</Form.Label>
        <Form.Select
          required
          aria-label='Default select example'
          className='mb-3'
          name='subContract'
          value={subContract}
          onChange={handleChange}>
          {subContracts.map((subContract) => (
            <option key={subContract.id} value={subContract.id}>
              {subContract.subContract}
            </option>
          ))}
        </Form.Select>

        <Form.Group className='mb-3'>
          <Form.Label>Value</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name='advance'
            type='number'
            placeholder='Value'
            min='1000'
            value={advance}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormInput;
