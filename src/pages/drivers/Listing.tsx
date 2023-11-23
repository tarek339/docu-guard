import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/context/AppContext";

const Listing = () => {
  const { admin, setDriverId, fetchDrivers, drivers, adminId } = useData();
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
    </div>
  );
};

export default Listing;
