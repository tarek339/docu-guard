import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/context/AppContext";

const DriverProfile = () => {
  const { driver, fetchDriver, navigateBack, driverId } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDriver();
  }, [driverId]);

  return (
    <div>
      <h3>DriverProfile</h3>
      <h3>{driver.firstName}</h3>
      <h3>{driver.lastName}</h3>
      <button onClick={navigateBack}>back</button>
      <button onClick={() => navigate(`/edit-driver/${driverId}`)}>edit</button>
    </div>
  );
};

export default DriverProfile;
