import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";

function ProjectAddInfo() {
  const [projectInfo, setProjectInfo] = useState([]);
  const [provinces, setProvinces] = useState([
    { id: 1, province: "Pro One" },
    { id: 2, province: "Pro Two" },
    { id: 3, province: "Pro Three" },
  ]);
  const [districts, setDistricts] = useState([
    { id: 1, district: "Dis One" },
    { id: 2, district: "Dis Two" },
    { id: 3, district: "Dis Three" },
  ]);
  const [cities, setCities] = useState([
    { id: 1, city: "City One" },
    { id: 2, city: "City Two" },
    { id: 3, city: "City Three" },
  ]);

  const { clientName, province, district, city } = projectInfo;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setProjectInfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Container>
      <Form>
        <Form.Group className='mb-3 mt-3'>
          <Form.Label>Client Name</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name='clientName'
            type='text'
            placeholder='Client Name'
          />
        </Form.Group>
        <Form.Group className='mb-3 mt-3'>
          <Form.Label>Address Line 01</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name='clientName'
            type='text'
            placeholder='Client Name'
          />
        </Form.Group>
        <Form.Group className='mb-3 mt-3'>
          <Form.Label>Address Line 02</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name='clientName'
            type='text'
            placeholder='Client Name'
          />
        </Form.Group>
        <Form.Group className='mb-3 mt-3'>
          <Form.Label>Address Line 03</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            name='clientName'
            type='text'
            placeholder='Client Name'
          />
        </Form.Group>
        <Form.Label>Province</Form.Label>
        <Form.Select
          required
          aria-label='Default select example'
          className='mb-3'
          name='province'
          value={province}
          onChange={handleChange}>
          {provinces.map((info) => (
            <option key={info.id} value={info.id}>
              {info.province}
            </option>
          ))}
        </Form.Select>
        <Form.Label>District</Form.Label>
        <Form.Select
          required
          aria-label='Default select example'
          className='mb-3'
          name='district'
          value={district}
          onChange={handleChange}>
          {districts.map((info) => (
            <option key={info.id} value={info.id}>
              {info.district}
            </option>
          ))}
        </Form.Select>
        <Form.Label>City</Form.Label>
        <Form.Select
          required
          aria-label='Default select example'
          className='mb-3'
          name='city'
          value={city}
          onChange={handleChange}>
          {cities.map((info) => (
            <option key={info.id} value={info.id}>
              {info.city}
            </option>
          ))}
        </Form.Select>
      </Form>
    </Container>
  );
}

export default ProjectAddInfo;
