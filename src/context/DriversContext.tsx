import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useFunctionsData, useTranslationsData } from ".";
import { IDriver, IDriverContext } from "../types/interfaces";
import { useFormik } from "formik";
import * as Yup from "yup";

export const DriverContext = createContext({});

export function DriverContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setResMessage, setOpenAlert } = useFunctionsData();
  const { t } = useTranslationsData();

  const [driver, setDriver] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licenseNumber: "",
    licenseValidity: "",
    licenseType: "",
    typeValidity: "",
    codeNum: "",
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
  const [codeNum, setCodeNum] = useState("");
  const [codeNumValidity, setCodeNumValidity] = useState("");
  const [driverCardNum, setDriverCardNum] = useState("");
  const [driverCardValidity, setDriverCardValidity] = useState("");
  const [drivers, setDrivers] = useState([]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("form.field")),
    lastName: Yup.string().required(t("form.field")),
    phoneNumber: Yup.string().required(t("form.field")),
    licenseNumber: Yup.string().required(t("form.field")),
    licenseValidity: Yup.string().required(t("form.field")),
    licenseType: Yup.string().required(t("form.field")),
    typeValidity: Yup.string().required(t("form.field")),
    codeNumValidity: Yup.string().required(t("form.field")),
    codeNum: Yup.string().required(t("form.field")),
    driverCardNum: Yup.string().required(t("form.field")),
    driverCardValidity: Yup.string().required(t("form.field")),
  });

  const formik = useFormik({
    initialValues: {
      id: crypto.randomUUID(),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      licenseNumber: licenseNumber,
      licenseValidity: licenseValidity,
      licenseType: licenseType,
      typeValidity: typeValidity,
      codeNum: codeNum,
      codeNumValidity: codeNumValidity,
      driverCardNum: driverCardNum,
      driverCardValidity: driverCardValidity,
    },
    validationSchema,

    onSubmit: (values: IDriver) => {
      window.api.createDriver(values);
      window.api.sendResponse(
        (_event: Electron.IpcRendererEvent, message: string) => {
          setResMessage(message);
          setOpenAlert(true);
        }
      );
    },
  });

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
        setCodeNum(driver.codeNum);
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
    driver.codeNum,
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
      codeNum: codeNum,
      codeNumValidity: codeNumValidity,
      driverCardNum: driverCardNum,
      driverCardValidity: driverCardValidity,
    };
    setDriver(newData);
    window.api.editDriver(newData);
    window.api.sendMessage((_event, message) => {
      setResMessage(message);
      setTimeout(() => {
        setResMessage("");
      }, 2000);
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
    codeNum,
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
      codeNum: "",
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
      setCodeNum(""),
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
      codeNum,
      setCodeNum,
      codeNumValidity,
      setCodeNumValidity,
      driverCardNum,
      setDriverCardNum,
      driverCardValidity,
      setDriverCardValidity,

      fetchDrivers,
      fetchDriver,
      editDriver,
      deleteDriver,
      resetDriver,
      formik,
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
      codeNum,
      setCodeNum,
      codeNumValidity,
      setCodeNumValidity,
      driverCardNum,
      setDriverCardNum,
      driverCardValidity,
      setDriverCardValidity,

      fetchDrivers,
      fetchDriver,
      editDriver,
      deleteDriver,
      resetDriver,
      formik,
    ]
  );

  return (
    <DriverContext.Provider value={contextValue}>
      {props.children}
    </DriverContext.Provider>
  );
}

export const useDriversData = () => useContext(DriverContext) as IDriverContext;
