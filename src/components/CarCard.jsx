import "../App.css";

const CarCard = ({ car }) => {
    return (
        <div className="card">
            <div className="card-title">
                {car.year} {car.make} {car.model}
            </div>
            <div className="card-subtitle">
                {car.transmission} | {car.fuel_type}
            </div>
            <div className="card-details">
                <div>₹ {car.price}</div>
                <div>Emi at ₹{car.emi}</div>
            </div>
            <div className="card-city">{car.city_name}</div>
        </div>
    );
};

export default CarCard;