import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IAppContext } from "../../types/interfaces/appContext";
import { IDriver, IParsedUser } from "../../types/interfaces/components";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({});

export function AppContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    id: "",
    companyName: "",
    adminName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [adminId, setAdminId] = useState("");
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

  const createAdmin = useCallback(() => {
    const newAdmin = {
      ...admin,
      id: crypto.randomUUID(),
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    setAdmin(newAdmin);
    window.api.signUp(newAdmin);
    navigate("/sign-in");
  }, [admin, adminName, companyName, email, password, confirmPassword]);

  const getAdminProfile = useCallback(() => {
    localStorage.getItem("adminId");
    localStorage.getItem("admin");
    window.api.fetchAdmin((_event, parsedUser: IParsedUser) => {
      localStorage.setItem("adminId", parsedUser.parsedId);
      localStorage.setItem("admin", JSON.stringify(parsedUser));
      setAdmin({
        id: parsedUser.parsedId,
        companyName: parsedUser.parsedCompanyName,
        adminName: parsedUser.parsedName,
        email: parsedUser.parsedEmail,
        password: "",
        confirmPassword: "",
      });
      setAdminId(parsedUser.parsedId);
      navigate("/drivers");
    });
  }, [admin, adminId]);

  const regetAdminProfile = useCallback(() => {
    const storedUser = localStorage.getItem("admin");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser as string);
      setAdmin({
        id: parsedUser.parsedId,
        companyName: parsedUser.parsedCompanyName,
        adminName: parsedUser.parsedName,
        email: parsedUser.parsedEmail,
        password: "",
        confirmPassword: "",
      });
      setAdminName(parsedUser.parsedName);
      setCompanyName(parsedUser.parsedCompanyName);
      setEmail(parsedUser.parsedEmail);
      setPassword("");
      setConfirmPassword("");
    } else return;
  }, [admin]);

  const editAmin = useCallback(() => {
    const newData = {
      id: adminId,
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    setAdmin(newData);
    window.api.editProfile(newData);
    window.api.sendMessage((_event, message) => {
      setResMessage(message);
    });
    console.log(newData);
  }, [
    admin,
    adminName,
    companyName,
    email,
    password,
    confirmPassword,
    adminId,
  ]);

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

  const deleteData = () => {
    window.api.deleteDriver(driverId);
    if (driverId === "") {
      return;
    }
    navigate("/drivers");
  };

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
    navigate("/drivers");
  };

  const logOut = useCallback(() => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("driverId");
    localStorage.removeItem("admin");
    setAdminId("");
    setAdmin({
      id: "",
      companyName: "",
      adminName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAdminName("");
    setPassword("");
    navigate("sign-in");
  }, [admin, adminId]);

  const turnOffApp = () => {
    window.api.turnOffApp(logOut());
  };

  useEffect(() => {
    window.api.resetStates(logOut());
  }, []);

  const contextValue = useMemo(
    () => ({
      admin,
      setAdmin,
      companyName,
      setCompanyName,
      adminName,
      setAdminName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,

      adminId,
      setAdminId,
      editAmin,

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

      createAdmin,
      getAdminProfile,
      reset,
      fetchDrivers,
      fetchDriver,
      createNewDriver,
      navigateBack,
      editDriver,
      deleteData,
      logOut,
      regetAdminProfile,
      navigate,
      turnOffApp,
    }),
    [
      admin,
      setAdmin,
      companyName,
      setCompanyName,
      adminName,
      setAdminName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,

      adminId,
      setAdminId,
      editAmin,

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

      createAdmin,
      getAdminProfile,
      reset,
      fetchDrivers,
      fetchDriver,
      createNewDriver,
      navigateBack,
      editDriver,
      deleteData,
      logOut,
      regetAdminProfile,
      navigate,
      turnOffApp,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useData = () => useContext(AppContext) as IAppContext;
