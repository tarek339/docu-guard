import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFunctionsData, useTrucksData } from "../../context";

const TrucksProfile = () => {
  const { truck, truckId, fetchTruck } = useTrucksData();
  const { navigateBack } = useFunctionsData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTruck();
  }, [truckId]);

  return (
    <div>
      <h3>Trucks Profile</h3>
      <h3>{truck.indicator}</h3>
      <h3>{truck.producer}</h3>
      <button onClick={navigateBack}>back</button>
      <button onClick={() => navigate(`/edit-truck/${truckId}`)}>edit</button>
    </div>
  );
};

export default TrucksProfile;
