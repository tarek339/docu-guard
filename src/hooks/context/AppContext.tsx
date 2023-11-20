import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IAppContext } from "../../types/interfaces/appContext";
import { IDriver } from "../../types/interfaces/components";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

export function AppContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const [resMessage, setResMessage] = useState(null);

  const [driver, setDriver] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licenseNumber: "",
    licenseValidity: "",
    licenseType: "",
    typeValidity: "",
    codeNumValidity: "",
    driverCardNum: "",
    driverCardValidity: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseValidity, setLicenseValidity] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [typeValidity, setTypeValidity] = useState("");
  const [codeNumValidity, setCodeNumValidity] = useState("");
  const [driverCardNum, setDriverCardNum] = useState("");
  const [driverCardValidity, setDriverCardValidity] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [driverId, setDriverId] = useState("");

  const reset = () => {
    setDriver({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      licenseNumber: "",
      licenseValidity: "",
      licenseType: "",
      typeValidity: "",
      codeNumValidity: "",
      driverCardNum: "",
      driverCardValidity: "",
    });
    setFirstName(""),
      setLastName(""),
      setPhoneNumber(""),
      setLicenseNumber(""),
      setLicenseValidity(""),
      setLicenseType(""),
      setTypeValidity(""),
      setCodeNumValidity(""),
      setDriverCardNum(""),
      setDriverCardValidity("");
  };

  const navigateBack = () => {
    localStorage.removeItem("driverId");
    navigate("/drivers");
  };

  const createNewDriver = useCallback(() => {
    const newDriver = {
      id: crypto.randomUUID(),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      licenseNumber: licenseNumber,
      licenseValidity: licenseValidity,
      licenseType: licenseType,
      typeValidity: typeValidity,
      codeNumValidity: codeNumValidity,
      driverCardNum: driverCardNum,
      driverCardValidity: driverCardValidity,
    };
    setDriver(newDriver);
    window.api.createDriver(newDriver);
    reset();
    window.api.sendMessage((_event: Electron.IpcRendererEvent, message) => {
      setResMessage(message);
      message = resMessage;
    });
  }, [
    driver,
    firstName,
    lastName,
    phoneNumber,
    licenseNumber,
    licenseValidity,
    licenseType,
    typeValidity,
    codeNumValidity,
    driverCardNum,
    driverCardValidity,
  ]);

  const fetchDrivers = useCallback(() => {
    window.api.fetchDrivers(drivers);
    window.api.sendDrivers((_event: Electron.IpcRendererEvent, drivers) => {
      setDrivers(drivers);
    });
  }, [drivers]);

  const fetchDriver = useCallback(() => {
    const savedDriverId = localStorage.getItem("driverId");
    let currentDriverId: string;
    if (savedDriverId) {
      currentDriverId = savedDriverId;
    } else {
      currentDriverId = driverId;
      localStorage.setItem("driverId", currentDriverId);
    }
    window.api.fetchDriver(currentDriverId);
    window.api.sendDriver(
      (_event: Electron.IpcRendererEvent, driver: IDriver) => {
        driver.id = currentDriverId;
        setDriverId(currentDriverId);
        setDriver(driver);
        setFirstName(driver.firstName);
        setLastName(driver.lastName);
        setPhoneNumber(driver.phoneNumber);
        setLicenseNumber(driver.licenseNumber);
        setLicenseValidity(driver.licenseValidity);
        setLicenseType(driver.licenseType);
        setTypeValidity(driver.typeValidity);
        setCodeNumValidity(driver.codeNumValidity);
        setDriverCardNum(driver.driverCardNum);
        setDriverCardValidity(driver.driverCardValidity);
      }
    );
  }, [
    driverId,
    driver.firstName,
    driver.lastName,
    driver.phoneNumber,
    driver.licenseNumber,
    driver.licenseValidity,
    driver.licenseType,
    driver.typeValidity,
    driver.codeNumValidity,
    driver.driverCardNum,
    driver.driverCardValidity,
  ]);

  const editDriver = useCallback(() => {
    console.log(driverId);
    const newData = {
      id: driverId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      licenseNumber: licenseNumber,
      licenseValidity: licenseValidity,
      licenseType: licenseType,
      typeValidity: typeValidity,
      codeNumValidity: codeNumValidity,
      driverCardNum: driverCardNum,
      driverCardValidity: driverCardValidity,
    };
    setDriver(newData);
    console.log(newData);
    window.api.editDriver(newData);
    window.api.sendMessage((_event, message) => {
      setResMessage(message);
    });
  }, [
    driverId,
    firstName,
    lastName,
    phoneNumber,
    licenseNumber,
    licenseValidity,
    licenseType,
    typeValidity,
    codeNumValidity,
    driverCardNum,
    driverCardValidity,
  ]);

  const deleteData = () => {
    window.api.deleteDriver(driverId);
    if (driverId === "") {
      return;
    }
    navigate("/drivers");
  };

  const contextValue = useMemo(
    () => ({
      resMessage,
      setResMessage,

      driver,
      setDriver,
      drivers,
      setDrivers,
      driverId,
      setDriverId,

      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber,
      licenseNumber,
      setLicenseNumber,
      licenseValidity,
      setLicenseValidity,
      licenseType,
      setLicenseType,
      typeValidity,
      setTypeValidity,
      codeNumValidity,
      setCodeNumValidity,
      driverCardNum,
      setDriverCardNum,
      driverCardValidity,
      setDriverCardValidity,

      reset,
      fetchDrivers,
      fetchDriver,
      createNewDriver,
      navigateBack,
      editDriver,
      deleteData,
    }),
    [
      resMessage,
      setResMessage,

      driver,
      setDriver,
      drivers,
      setDrivers,
      driverId,
      setDriverId,

      firstName,
      setFirstName,
      lastName,
      setLastName,
      phoneNumber,
      setPhoneNumber,
      licenseNumber,
      setLicenseNumber,
      licenseValidity,
      setLicenseValidity,
      licenseType,
      setLicenseType,
      typeValidity,
      setTypeValidity,
      codeNumValidity,
      setCodeNumValidity,
      driverCardNum,
      setDriverCardNum,
      driverCardValidity,
      setDriverCardValidity,

      reset,
      fetchDrivers,
      fetchDriver,
      createNewDriver,
      navigateBack,
      editDriver,
      deleteData,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useData = () => useContext(AppContext) as IAppContext;
