import FormInput from "./components/Inputs/FormInput";
import ProjectAddInfo from "./pages/project/ProjectAddInfo";
import FittingData from "./pages/plumbing/FittingData";
import PipeData from "./pages/plumbing/PipeData";
import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <Navbar bg='primary' variant='dark' className='mb-3'>
        <Container>
          <Navbar.Brand href='#home'>WEB APPLICATION</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <FittingData /> */}
      <PipeData />
      {/* <ProjectAddInfo /> */}
    </div>
  );
}

export default App;
