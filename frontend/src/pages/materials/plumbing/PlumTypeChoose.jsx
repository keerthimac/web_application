import { useState, useEffect } from "react";
import CardImageBack from "../../../components/Shared/CardImageBack";
import { useParams } from "react-router-dom";
import DrainageFittings from "../../../images/plumbing/DrainageFittings.jpg";
import PressureFittings from "../../../images/plumbing/PressureFittings.jpg";
import PvcPipes from "../../../images/plumbing/PvcPipes.jpg";
import CpvcFittings from "../../../images/plumbing/CpvcFittings.jpg";
import CpvcPipes from "../../../images/plumbing/CpvcPipes.jpg";
import BackButton from "../../../components/Shared/BackButton";

function PlumTypeChoose() {
  const { brandId, plumType } = useParams();
  const data = useParams();
  console.log(data);

  const [plumbType, setPlumbType] = useState([]);

  const getBrandElementList = async () => {
    if (plumType == "fittingData") {
      try {
        const response = await fetch(`/api/plumbing/plum_fitting_type`);
        const data = await response.json();

        // setPlumbingData(data);
        const newArr = data.map((obj) => {
          return {
            id: obj.id,
            title: obj.plum_fitting_type,
            body: `View the ${obj.plum_type} Data & current prices`,
            // link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
            buttons: [
              {
                id: 1,
                value: "View Price",
                link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
              },
            ],
            src:
              obj.plum_fitting_type == "Pressure Fittings"
                ? PressureFittings
                : obj.plum_fitting_type == "Drainage Fittings"
                ? DrainageFittings
                : obj.plum_fitting_type == "Sewerage Fittings"
                ? DrainageFittings
                : obj.plum_fitting_type == "Cpvc Fittings"
                ? CpvcFittings
                : "",
          };
        });
        setPlumbType(newArr);
      } catch (err) {
        console.error(err.message);
      }
    } else if (plumType == "pipeData") {
      try {
        const response = await fetch(`/api/plumbing/plum_pipe_type`);
        const data = await response.json();

        // setPlumbingData(data);
        const newArr = data.map((obj) => {
          return {
            id: obj.id,
            title: obj.plum_pipe_type,
            body: `View the ${obj.plum_pipe_type} Data & current prices`,
            // link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
            buttons: [
              {
                id: 1,
                value: "View Price",
                link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
              },
            ],
            src:
              obj.plum_pipe_type == "Pressure pipes"
                ? PvcPipes
                : obj.plum_pipe_type == "Drainage Pipes"
                ? DrainageFittings
                : obj.plum_pipe_type == "Cpvc Pipes"
                ? CpvcPipes
                : "",
          };
        });
        setPlumbType(newArr);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    getBrandElementList();
  }, []);

  return (
    <div>
      <BackButton />
      <div className='mt-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {plumbType.map((item) => (
          <CardImageBack key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default PlumTypeChoose;
