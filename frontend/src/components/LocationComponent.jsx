import { useState, useEffect } from "react";
import SelectForm from "./Inputs/SelectForm";

function LocationComponent(props) {
  const [provinces, setProvinces] = useState([{ id: 0, label: "No Options" }]);
  const [districts, setDistricts] = useState([{ id: 0, label: "No Options" }]);
  const [cities, setCities] = useState([{ id: 0, label: "No Options" }]);

  const { onChange, state, setState } = props;

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    setState({
      ...state,
      district: "0",
    });
    getDistricts();
  }, [state.province]);

  useEffect(() => {
    setState({
      ...state,
      city: "0",
    });
    getCities();
  }, [state.district]);

  const getProvinces = async () => {
    try {
      const response = await fetch("http://localhost:5000/location/province");
      const data = await response.json();
      const value = data.map((province) => ({
        id: province.province_id,
        label: province.province_name,
      }));
      // setBankList(data);
      // setBankOption(values);
      setProvinces([...provinces, ...value]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDistricts = async () => {
    try {
      if (state.province === "0") {
        setDistricts([{ id: 0, label: "No Options" }]);
        return;
      }
      const code = state.province;
      // console.log("district run");
      const response = await fetch(
        `http://localhost:5000/location/district/${code}`
      );
      const data = await response.json();
      const value = data.map((district) => ({
        id: district.district_id,
        label: district.district_name,
      }));
      setDistricts([{ id: 0, label: "No Options" }, ...value]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCities = async () => {
    try {
      if (state.province === "0" || state.district === "0") {
        setCities([{ id: 0, label: "No Options" }]);
        return;
      }
      let id = state.district;
      let pro_id = state.province;
      //console.log(code);
      const response = await fetch(
        `http://localhost:5000/location/city/${id}/${pro_id}`
      );

      const data = await response.json();
      const value = data.map((city) => ({
        id: city.city_id,
        label: city.city_name,
      }));
      setCities([{ id: 0, label: "No Options" }, ...value]);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <SelectForm
        label='Province'
        onChange={onChange}
        options={provinces}
        labelKey='label'
        value={state.province}
        name='province'
      />
      <SelectForm
        label='District'
        onChange={onChange}
        options={districts}
        labelKey='label'
        value={state.district}
        name='district'
      />
      <SelectForm
        label='City'
        onChange={onChange}
        options={cities}
        labelKey='label'
        value={state.city}
        name='city'
      />
    </>
  );
}

export default LocationComponent;
