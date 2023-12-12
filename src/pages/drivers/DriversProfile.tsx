import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/AppContext";

const DriversProfile = () => {
  const { navigateBack, driver, fetchDriver, driverId } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDriver();
  }, [driverId]);

  return (
    <div>
      <h3>DriversProfile</h3>
      <h3>{driver.firstName}</h3>
      <h3>{driver.lastName}</h3>
      <button onClick={navigateBack}>back</button>
      <button onClick={() => navigate(`/edit-driver/${driverId}`)}>edit</button>
    </div>
  );
};

export default DriversProfile;
