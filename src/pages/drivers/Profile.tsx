import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDriversData } from "../../context/DriversContext";
import { useFunctionsData } from "../../context/FunctionsContext";

const DriverProfile = () => {
  const { driver, fetchDriver, driverId } = useDriversData();
  const { navigateBack } = useFunctionsData();
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
