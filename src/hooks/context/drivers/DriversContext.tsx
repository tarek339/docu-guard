import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IDriver } from "../../../types/interfaces/components";
import { IDriverContext } from "../../../types/interfaces/driverContext";
import { useFunctionsData } from "../functions/FunctionsContext";

export const DriverContext = createContext({});

export function DriverContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setResMessage, resMessage } = useFunctionsData();

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
  const [driverId, setDriverId] = useState("");
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
    resetDriver();
    window.api.sendMessage((_event: Electron.IpcRendererEvent, message) => {
      setResMessage(message);
      message = resMessage;
    });
  }, [
    resMessage,
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
    if (savedDriverId) currentDriverId = savedDriverId;
    else {
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

  const deleteDriver = () => {
    window.api.deleteDriver(driverId);
    if (driverId === "") {
      return;
    }
    navigate("/drivers");
  };

  const resetDriver = () => {
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

  const contextValue = useMemo(
    () => ({
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

      createNewDriver,
      fetchDrivers,
      fetchDriver,
      editDriver,
      deleteDriver,
      resetDriver,
    }),
    [
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

      createNewDriver,
      fetchDrivers,
      fetchDriver,
      editDriver,
      deleteDriver,
      resetDriver,
    ]
  );

  return (
    <DriverContext.Provider value={contextValue}>
      {props.children}
    </DriverContext.Provider>
  );
}

export const useDriversData = () => useContext(DriverContext) as IDriverContext;
