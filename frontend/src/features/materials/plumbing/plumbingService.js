import axios from "axios";

const getFittingList = async (fittingTypeId) => {
  const response = await axios.get(`/api/plumbing/fitting/${fittingTypeId}`);
  const data = await response.data;
  return data;
};

const getFittingPriceList = async (fittingTypeId, brandId) => {
  const response = await axios.get(
    `/api/plumbing/fitting/${fittingTypeId}/${brandId}`
  );
  const data = await response.data;
  console.log(data);
  return data;
};

const getBrandList = async () => {
  const response = await axios.get(`/api/plumbing/brands`);
  const data = await response.data;

  const newArr = data.map((obj) => {
    return {
      id: obj.id,
      title: obj.brand,
      body: `View the what Elements ${obj.brand} Brand offers and see current prices`,
      buttons: [{ id: 1, value: "Go", link: `plumbing/brands/${obj.id}` }],
      src: `${obj.image_url}`,
    };
  });
  return newArr;
};

const getBrandElementList = async (plumType, brandId) => {
  if (plumType == "fittingData") {
    const response = await axios.get(`/api/plumbing/plum_fitting_type`);
    const data = await response.data;

    // setPlumbingData(data);
    const newArr = data.map((obj) => {
      return {
        id: obj.id,
        title: obj.plum_fitting_type,
        body: `View the ${obj.plum_fitting_type} Data & current prices`,
        // link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
        buttons: [
          {
            id: 1,
            value: "View Price",
            link: `plumbing/brands/${brandId}/${plumType}/${obj.id}`,
          },
        ],
        src: `${obj.image_url}`,
      };
    });
    return newArr;
  } else if (plumType == "pipeData") {
    const response = await axios.get(`/api/plumbing/plum_pipe_type`);
    const data = await response.data;

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
        src: `${obj.image_url}`,
      };
    });
    return newArr;
  }
};

const plumbingService = {
  getFittingList,
  getFittingPriceList,
  getBrandList,
  getBrandElementList,
};

export default plumbingService;
