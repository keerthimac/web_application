import { useState, useEffect } from "react";
import CardImageBack from "../../../components/Shared/CardImageBack";
import { useParams } from "react-router-dom";
import DrainageFittings from "../../../images/plumbing/DrainageFittings.jpg";
import PressureFittings from "../../../images/plumbing/PressureFittings.jpg";
import PvcPipes from "../../../images/plumbing/PvcPipes.jpg";
import CpvcFittings from "../../../images/plumbing/CpvcFittings.jpg";
import CpvcPipes from "../../../images/plumbing/CpvcPipes.jpg";

function PlumElementChoose() {
  const { link } = useParams();
  console.log(link);

  const [plumType, setPlumType] = useState([]);

  const getBrandElementList = async () => {
    try {
      const response = await fetch(`/api/plumbing/plum_type`);
      const data = await response.json();

      // setPlumbingData(data);
      const newArr = data.map((obj) => {
        return {
          id: obj.id,
          title: obj.plum_type,
          body: `View the ${obj.plum_type} Data & current prices`,
          link: `plumbing/brands/${link}/${obj.plum_type}`,
          src:
            obj.plum_type == "Pressure pipes"
              ? PvcPipes
              : obj.plum_type == "Pressure fittings"
              ? PressureFittings
              : obj.plum_type == "Drainage Pipes"
              ? DrainageFittings
              : obj.plum_type == "Drainage  Fittings"
              ? DrainageFittings
              : obj.plum_type == "Cpvc Pipes"
              ? CpvcPipes
              : obj.plum_type == "Cpvc Fittings"
              ? CpvcFittings
              : "",
        };
      });
      setPlumType(newArr);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBrandElementList();
  }, []);

  const plumContent = [
    {
      id: 1,
      title: "PVC Pressure Fittings",
      body: "Pressure fitting Data with current prices",
      src: PressureFittings,
      link: `plumbing/brands/${link}/pressure_fittings`,
    },
    {
      id: 2,
      title: "PVC Drainage Fittings",
      body: "Drainage fitting Data with current prices",
      src: DrainageFittings,
      link: `plumbing/brands/${link}/drainage_fittings`,
    },
    {
      id: 3,
      title: "PVC Pressure & Drainage Pipes",
      body: "fitting Data with current prices",
      src: PvcPipes,
      link: `plumbing/brands/${link}/pipes`,
    },
    {
      id: 4,
      title: "CPVC Fittings",
      src: CpvcFittings,
      link: `plumbing/brands/${link}/cpvc_fittings`,
    },
    {
      id: 5,
      title: "CPVC Pipes",
      body: "fitting Data with current prices",
      src: CpvcPipes,
      link: `plumbing/brands/${link}/cpvc_pipes`,
    },
  ];

  return (
    <div className='mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {/* <h1>Brand Page </h1> */}
      {plumType.map((item) => (
        <CardImageBack key={item.id} content={item} />
      ))}
    </div>
  );
}

export default PlumElementChoose;
