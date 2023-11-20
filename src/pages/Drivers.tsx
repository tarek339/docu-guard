import { useEffect } from "react";
import { useData } from "../hooks/context/AppContext";
import { useNavigate } from "react-router-dom";

const Drivers = () => {
  const { setDriverId, fetchDrivers, drivers } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
    localStorage.removeItem("driverId");
  }, []);

  return (
    <div>
      <h3>Drivers</h3>
      {drivers.map((driver, _index) => {
        return (
          <div key={driver.id}>
            <h3>{driver.firstName}</h3>
            <h3>{driver.lastName}</h3>
            <button
              onClick={() => {
                setDriverId(driver.id);
                navigate(`/driver-profile/${driver.id}`);
              }}
            >
              profile
            </button>
          </div>
        );
      })}
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
};

export default Drivers;
