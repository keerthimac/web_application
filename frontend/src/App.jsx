// import FormInput from "./components/Inputs/FormInput";
// import ProjectAddInfo from "./pages/project/ProjectAddInfo";
// import SubPaymentsAdd from "./pages/subcontract/subPaymentsAdd";
// import FittingData from "./pages/plumbing/FittingData";
// import PipeData from "./pages/plumbing/PipeData";
// import AddFittingData from "./pages/plumbing/AddFittingData";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import FittingData from "./pages/plumbing/FittingData";
import AddFittingData from "./pages/plumbing/AddFittingData";
import Plumbing from "./pages/plumbing/Plumbing";
import PlumBrands from "./pages/plumbing/PlumBrands";
import PlumHistorical from "./pages/plumbing/PlumHistorical";
import PlumFittingData from "./pages/plumbing/PlumFittingData";
import PlumPipeData from "./pages/plumbing/PlumPipeData";
import PlumAddData from "./pages/plumbing/PlumAddData";
import PlumAddPrice from "./pages/plumbing/PlumAddPrice";
import PlumElementChoose from "./pages/plumbing/PlumElementChoose";

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
                <Route
                  path='/plumbing/brands/:link'
                  element={<PlumElementChoose />}
                />

                {/* /plumbing/brands/BrandName/ Routes */}
                <Route
                  path='/plumbing/brands/:link/:fittingType'
                  element={<FittingData />}
                />

                {/* /Historical Route*/}
                <Route
                  path='/plumbing/historical'
                  element={<PlumHistorical />}
                />
                <Route
                  path='/plumbing/fittingData'
                  element={<PlumFittingData />}
                />
                <Route
                  path='/plumbing/addFittingPrice'
                  element={<AddFittingData />}
                />
                <Route path='/*' element={<NotFound />} />
                <Route path='/notfound' element={<NotFound />} />
              </Routes>
            </main>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
