import { useEffect, useState } from "react";
import CardImageBack from "../../../components/Shared/CardImageBack";
import slon from "../../../images/plumbing/slon.jpg";
import anton from "../../../images/plumbing/Anton.jpg";
import national from "../../../images/plumbing/national.jpg";
import BackButton from "../../../components/Shared/BackButton";

function PlumBrands() {
  const [brands, setBrands] = useState([]);

  const getBrandList = async () => {
    try {
      const response = await fetch(`/api/plumbing/brands`);
      const data = await response.json();

      // setPlumbingData(data);
      const newArr = data.map((obj) => {
        return {
          id: obj.id,
          title: obj.brand,
          body: `View the what Elements ${obj.brand} Brand offers and see current prices`,
          buttons: [{ id: 1, value: "Go", link: `plumbing/brands/${obj.id}` }],
          src:
            obj.brand == "Slon"
              ? slon
              : obj.brand == "Anton"
              ? anton
              : obj.brand == "National"
              ? national
              : "",
        };
      });
      setBrands(newArr);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBrandList();
  }, []);

  return (
    <div>
      <BackButton />
      <div className='mt-5 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {brands.map((item) => (
          <CardImageBack key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}

export default PlumBrands;
