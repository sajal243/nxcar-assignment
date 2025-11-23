import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../redux/carSlice';
import { useGetCitiesQuery } from '../redux/carApi';

const CarFilters = () => {
  const dispatch = useDispatch();
  const globalFilters = useSelector(state => state.car.filters);
  const { data: citiesObj, isLoading } = useGetCitiesQuery();
  const cities = citiesObj?.data || [];

  const [localFilters, setLocalFilters] = useState({
    city_id: globalFilters.city_id,
    make: [...globalFilters.make],
    model: [...globalFilters.model]

  })

  const handleLocalChange = (name, value) => {
    setLocalFilters((prev) => ({...prev, [name]: value}));
  }

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  useEffect(() => {
    setLocalFilters({
        city_id: globalFilters.city_id,
        make: [...globalFilters.make],
        model: [...globalFilters.model]
    });
  }, [globalFilters]);


console.log("filters ", globalFilters);

  return (
    <div style={{ marginBottom: '20px', display: "flex", gap: "10px", justifyContent: "center" }}>
      <select
        value={localFilters.city_id}
        onChange={(e) => handleLocalChange('city_id', e.target.value)}
      >
        <option value="">Select City</option>
        {isLoading
          ? <option>Loading...</option>
          : cities?.map(city => <option key={city.city_id} value={city.city_id}>{city.city_name}</option>)
        }
      </select>

      <input
        type="text"
        placeholder="Make (comma separated)"
        value={localFilters.make.join(',')}
        onChange={(e) => {
            const value = e.target.value
            .split(',')
          handleLocalChange('make', value);
        }}
      />

      <input
        type="text"
        placeholder="Model (comma separated)"
        value={localFilters.model.join(',')}
        onChange={(e) => handleLocalChange('model', e.target.value.split(','))}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CarFilters;
