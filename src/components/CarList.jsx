import CarCard from './CarCard';
import "../App.css"

const CarList = ({ cars, loading }) => {
  if (loading) return <p>Loading cars...</p>;

  console.log("cars in CarList ", cars);
  if (!cars || cars.length === 0) return <p>No cars found</p>;

  return (
    <div className='body'>
      {cars.map(car => (
        <CarCard key={car.car_id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
