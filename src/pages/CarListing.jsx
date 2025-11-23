import React, { useEffect, useState } from 'react';
import { useGetCarsMutation } from '../redux/carApi';
import CarFilters from '../components/CarFilters';
import CarList from '../components/CarList';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';

const CarListingPage = () => {

    const filters = useSelector((state) => state.car.filters)
    const page = useSelector((state) => state.car.page)

  const [getCars, { data: carsData, isLoading: carsLoading }] = useGetCarsMutation();

  const fetchCars = () => {
    const payload = {
      page,
      fltr: [
        { type: "range", name: "year", ...filters.year },
        { type: "range", name: "price", ...filters.price },
        { type: "multiselect", name: "make", options: filters.make },
        { type: "multiselect", name: "model", options: filters.model },
        { city_id: filters.city_id },
      ],
      sort: null,
      sort_by: null,
    };
    getCars(payload);
  };

  useEffect(() => {
    fetchCars();
  }, [filters, page]);

  console.log('Cars Data:', carsData);
  const totalPages = carsData?.pagination?.total_pages || 1;

  return (
    <div>
        <h1>Car Listing</h1>
        <CarFilters />
      <CarList cars={carsData?.allcars} loading={carsLoading} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default CarListingPage;
