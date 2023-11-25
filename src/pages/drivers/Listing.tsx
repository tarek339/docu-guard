import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/context/AppContext";

const Listing = () => {
  const { setDriverId, fetchDrivers, drivers, resMessage, setResMessage } =
    useData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrivers();
    localStorage.removeItem("driverId");
  }, []);

  const backUp = () => {
    window.api.backUpDriver();
    window.api.sendMessage((_event, message: string) => {
      setResMessage(message);
    });
  };

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
      <div>
        <button onClick={backUp}>back up db</button>
      </div>
      <div>
        <h3>{resMessage}</h3>
      </div>
    </div>
  );
};

export default Listing;
