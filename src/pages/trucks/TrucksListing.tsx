import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTrucksData } from "../../context";
import { ITruck } from "../../types/interfaces/properties";

const TrucksListing = () => {
  const { setTruckId, fetchTrucks, trucks } = useTrucksData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrucks();
    localStorage.removeItem("truckId");
  }, []);

  return (
    <div>
      <h3>Trucks</h3>
      {trucks.map((truck: ITruck, _index: number) => {
        return (
          <div key={truck.id}>
            <h3>{truck.indicator}</h3>
            <h3>{truck.producer}</h3>
            <button
              onClick={() => {
                setTruckId(truck.id);
                navigate(`/truck-profile/${truck.id}`);
              }}
            >
              profile
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TrucksListing;
