import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTrucksData } from "../../unused/TrucksContext";
import { useData } from "../../context/AppContext";

const TrucksProfile = () => {
  const { truck, truckId } = useData();
  const { navigateBack } = useData();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchTruck();
  // }, [truckId]);

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
