// import FormInput from "./components/Inputs/FormInput";
// import ProjectAddInfo from "./pages/project/ProjectAddInfo";
// import SubPaymentsAdd from "./pages/subcontract/subPaymentsAdd";
// import FittingData from "./pages/plumbing/FittingData";
// import PipeData from "./pages/plumbing/PipeData";
// import AddFittingData from "./pages/plumbing/AddFittingData";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import FittingData from "./pages/materials/plumbing/FittingData";
import AddFittingData from "./pages/materials/plumbing/AddFittingData";
import Plumbing from "./pages/materials/plumbing/Plumbing";
import PlumBrands from "./pages/materials/plumbing/PlumBrands";
import PlumHistorical from "./pages/materials/plumbing/PlumHistorical";
import PlumFittingData from "./pages/materials/plumbing/PlumFittingData";
import PlumPipeData from "./pages/materials/plumbing/PlumPipeData";
import PlumAddData from "./pages/materials/plumbing/PlumAddData";
import PlumAddPrice from "./pages/materials/plumbing/PlumAddPrice";
import PlumTypeChoose from "./pages/materials/plumbing/PlumTypeChoose";
import PlumElementChoose from "./pages/materials/plumbing/PlumElementChoose";

// import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className=' h-screen'>
          <Navbar />
          <div className=' flex flex-row h-screen'>
            <Menu />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />

                <Route path='/plumbing' element={<Plumbing />} />
                <Route path='/plumbing/brands' element={<PlumBrands />} />
                {/* <Route
                    path='/plumbing/brands/:brandId'
                    element={<PlumTypeChoose />}
                  /> */}
                <Route
                  path='/plumbing/brands/:brandId'
                  element={<PlumElementChoose />}
                />

                {/* /plumbing/brands/BrandName/ Routes */}
                <Route
                  path='/plumbing/brands/:brandId/:plumType'
                  element={<PlumTypeChoose />}
                />
                <Route
                  path='/plumbing/brands/:brandId/fittingData/:plumFittingTypeId'
                  element={<FittingData />}
                />
                <Route
                  path='/plumbing/brands/:brandId/fittingData/:plumFittingTypeId/addData'
                  element={<AddFittingData />}
                />

                {/* /Historical Route*/}
                <Route
                  path='/plumbing/historical'
                  element={<PlumHistorical />}
                />
                {/* <Route
                    path='/plumbing/fittingData'
                    element={<PlumFittingData />}
                  /> */}
                {/* <Route
                    path='/plumbing/addFittingPrice'
                    element={<AddFittingData />}
                  /> */}

                <Route path='/*' element={<NotFound />} />
                <Route path='/notfound' element={<NotFound />} />
              </Routes>
            </main>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
      <ToastContainer position='top-center' autoClose={1000} theme='dark' />
    </>
  );
}

export default App;
