import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import FormInput from "../../components/FormInput";
import LocationComponent from "../../components/LocationComponent";

function ProjectAddInfo() {
  const [projectInfo, setProjectInfo] = useState({
    clientName: "",
    addressLine01: "",
    addressLine02: "",
    addressLine03: "",
    province: "0",
    district: "0",
    city: "0",
  });

  const clientForm = [
    {
      id: 1,
      name: "clientName",
      type: "text",
      placeholder: "Client Name",
      label: "Client Name",
      required: true,
    },
    {
      id: 2,
      name: "addressLine01",
      type: "text",
      placeholder: "Address Line 01",
      label: "Address Line 01",
      required: true,
    },
    {
      id: 3,
      name: "addressLine02",
      type: "text",
      placeholder: "Address Line 02",
      label: "Address Line 02",
      required: true,
    },
    {
      id: 4,
      name: "addressLine03",
      type: "text",
      placeholder: "Address Line 03",
      label: "Address Line 03",
      required: true,
    },
  ];

  const onChange = (e) => {
    setProjectInfo({
      ...projectInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Form>
        <Form.Group className='mb-3 mt-3'>
          {clientForm.map((data) => (
            <FormInput
              key={data.id}
              {...data}
              value={projectInfo[data.name]}
              onChange={onChange}
            />
          ))}
        </Form.Group>
        <LocationComponent
          onChange={onChange}
          state={projectInfo}
          setState={setProjectInfo}
        />
      </Form>
    </Container>
  );
}

export default ProjectAddInfo;
