import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IAppContext, IDriver, IValues } from "../types/interfaces";
import { useNavigate } from "react-router-dom";
import { IParsedUser } from "../types/interfaces/properties";
import { useTranslationsData } from "./TranslationContext";

export const AppContext = createContext({});

export function AppContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { t } = useTranslationsData();

  // ADMIN STATES
  const [message, setMessage] = useState("");
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

  // DRIVER STATES
  const [driver, setDriver] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    street: "",
    houseNum: "",
    zipCode: "",
    location: "",
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
  const [street, setStreet] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [location, setLocation] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseValidity, setLicenseValidity] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [typeValidity, setTypeValidity] = useState("");
  const [codeNum, setCodeNum] = useState("");
  const [codeNumValidity, setCodeNumValidity] = useState("");
  const [driverCardNum, setDriverCardNum] = useState("");
  const [driverCardValidity, setDriverCardValidity] = useState("");
  const [drivers, setDrivers] = useState([]);

  // TRUCKS STATE
  const [truck, setTruck] = useState({
    id: "",
    indicator: "",
    producer: "",
    type: "",
    weight: "",
    nextHU: "",
    nextSP: "",
  });
  const [truckId, setTruckId] = useState("");
  const [indicator, setIndicator] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [nextHU, setNextHU] = useState("");
  const [nextSP, setNextSP] = useState("");
  const [trucks, setTrucks] = useState([]);

  // TRAILERS STATE
  const [trailer, setTrailer] = useState({
    id: "",
    indicator: "",
    producer: "",
    type: "",
    weight: "",
    nextHU: "",
    nextSP: "",
  });
  const [trailerId, setTrailerId] = useState("");
  const [trailers, setTrailers] = useState([]);

  // FUNCTIONS STATES
  const [resMessage, setResMessage] = useState("");
  const [topLabel, setTopLabel] = useState(false);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [appState, setAppState] = useState();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalRows, setTotalRows] = useState(0);
  const [locatedFile, setLocatedFile] = useState("");

  // ADMIN CONTEXT
  // sign up admin
  const adminFormik = useFormik({
    initialValues: {
      id: crypto.randomUUID(),
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Admin name is required"),
      adminName: Yup.string().required("Admin name is required"),
      email: Yup.string().required("Admin name is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),

    onSubmit: (values, { resetForm }) => {
      setAdmin(values);
      resetForm();
      window.api.signUp(values);
      window.api.sendMessage((_event, message: string) => {
        setMessage(message);
        setOpenAlert(true);
        setPage(page - 1);
      });
    },
  });

  // sign in admin
  const formiks = useFormik({
    initialValues: {
      adminName: adminName,
      password: password,
    },
    validationSchema: Yup.object({
      adminName: Yup.string().required("Admin name is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values: IValues, { resetForm }) => {
      window.api.signIn(values);
      resetForm();
      window.api.sendMessage(
        (_event: Electron.IpcRendererEvent, message: string) => {
          setMessage(message);
          setOpenAlert(true);
        }
      );
    },
  });

  // load profile from backend
  const getAdminProfile = useCallback(() => {
    localStorage.getItem("adminId");
    localStorage.getItem("admin");
    window.api.fetchAdmin((_event, parsedUser: IParsedUser) => {
      localStorage.setItem("adminId", parsedUser.parsedId);
      localStorage.setItem("admin", JSON.stringify(parsedUser));
      setAdminId(parsedUser.parsedId);
      navigate("/dashboard");
    });
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
    if (!adminId) {
      localStorage.getItem("adminId");
      setAdminId(localStorage.getItem("adminId") as string);
    }
  }, [adminId]);

  // edit profile data
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
    window.api.sendResponse((_event, message) => {
      setPassword("");
      setConfirmPassword("");
      setMessage(message);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    });
  }, [
    message,
    admin,
    adminName,
    companyName,
    email,
    password,
    confirmPassword,
    adminId,
  ]);

  // DRIVER CONTEXT

  // add driver
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("form.field")),
    lastName: Yup.string().required(t("form.field")),
    phoneNumber: Yup.string().required(t("form.field")),
    street: Yup.string().required(t("form.field")),
    houseNum: Yup.string().required(t("form.field")),
    zipCode: Yup.string().required(t("form.field")),
    location: Yup.string().required(t("form.field")),
    licenseNumber: Yup.string().required(t("form.field")),
    licenseValidity: Yup.string().required(t("form.field")),
    licenseType: Yup.string().required(t("form.field")),
    typeValidity: Yup.string().required(t("form.field")),
    codeNumValidity: Yup.string().required(t("form.field")),
    codeNum: Yup.string().required(t("form.field")),
    driverCardNum: Yup.string().required(t("form.field")),
    driverCardValidity: Yup.string().required(t("form.field")),
  });

  const driverFormik = useFormik({
    initialValues: {
      id: crypto.randomUUID(),
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      street: street,
      houseNum: houseNum,
      zipCode: zipCode,
      location: location,
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
      console.log(values);
      // resetForm();
      window.api.sendMessage(
        (_event: Electron.IpcRendererEvent, message: string) => {
          setResMessage(message);
          setOpenAlert(true);
        }
      );
    },
  });

  // fetch drivers from db
  const fetchDrivers = useCallback(() => {
    window.api.fetchDrivers(drivers);
    window.api.sendDrivers((_event: Electron.IpcRendererEvent, drivers) => {
      setDrivers(drivers);
    });
  }, [drivers]);

  // fetch single driver from db
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
        setStreet(driver.street);
        setHouseNum(driver.houseNum);
        setZipCode(driver.zipCode);
        setLocation(driver.location);
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
    driver.street,
    driver.houseNum,
    driver.zipCode,
    driver.location,
    driver.licenseNumber,
    driver.licenseValidity,
    driver.licenseType,
    driver.typeValidity,
    driver.codeNum,
    driver.codeNumValidity,
    driver.driverCardNum,
    driver.driverCardValidity,
  ]);

  // edit driver
  const editDriver = useCallback(() => {
    console.log(driverId);
    const newData = {
      id: driverId,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      street: street,
      houseNum: houseNum,
      zipCode: zipCode,
      location: location,
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
    street,
    houseNum,
    zipCode,
    location,
    licenseNumber,
    licenseValidity,
    licenseType,
    typeValidity,
    codeNum,
    codeNumValidity,
    driverCardNum,
    driverCardValidity,
  ]);

  // delete driver
  const deleteDriver = () => {
    window.api.deleteDriver(driverId);
    if (driverId === "") {
      return;
    }
    navigate("/drivers");
  };

  // reset driver state
  const resetDriver = () => {
    setDriver({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      street: "",
      houseNum: "",
      zipCode: "",
      location: "",
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
      setStreet(""),
      setHouseNum(""),
      setZipCode(""),
      setLocation(""),
      setLicenseNumber(""),
      setLicenseValidity(""),
      setLicenseType(""),
      setTypeValidity(""),
      setCodeNum(""),
      setCodeNumValidity(""),
      setDriverCardNum(""),
      setDriverCardValidity("");
  };

  // FUNCTION CONTEXT
  // handle Alert
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  // log out admin
  const logOut = useCallback(() => {
    setOpen(false);
    localStorage.removeItem("adminId");
    localStorage.removeItem("driverId");
    localStorage.removeItem("truckId");
    localStorage.removeItem("trailerId");
    localStorage.removeItem("admin");
    setAdminId("");
    setCompanyName("");
    setAdminName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    navigate("/");
  }, [admin, adminId]);

  // turn off app
  const turnOffApp = () => {
    window.api.turnOffApp(logOut());
  };

  useEffect(() => {
    window.api.clearAdmin(() => {
      logOut();
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      // admin
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
      message,
      setMessage,
      getAdminProfile,
      adminFormik,
      formiks,

      // driver
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
      street,
      setStreet,
      houseNum,
      setHouseNum,
      zipCode,
      setZipCode,
      location,
      setLocation,
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
      driverFormik,

      // trucks
      truckId,
      setTruckId,
      truck,
      setTruck,
      indicator,
      setIndicator,
      producer,
      setProducer,
      type,
      setType,
      weight,
      setWeight,
      nextHU,
      setNextHU,
      nextSP,
      setNextSP,
      trucks,
      setTrucks,

      // trailers
      trailerId,
      setTrailerId,
      trailer,
      setTrailer,
      trailers,
      setTrailers,

      // functions
      resMessage,
      setResMessage,
      topLabel,
      setTopLabel,
      page,
      setPage,
      open,
      setOpen,
      anchorRef,
      openAlert,
      setOpenAlert,
      appState,
      setAppState,
      rowsPerPage,
      setRowsPerPage,
      totalRows,
      setTotalRows,
      logOut,
      navigate,
      turnOffApp,
      handleToggle,
      handleClose,
      locatedFile,
      setLocatedFile,
    }),
    [
      // admin
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
      message,
      setMessage,
      getAdminProfile,
      adminFormik,
      formiks,

      // driver
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
      street,
      setStreet,
      houseNum,
      setHouseNum,
      zipCode,
      setZipCode,
      location,
      setLocation,
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
      driverFormik,

      // trucks
      truckId,
      setTruckId,
      truck,
      setTruck,
      indicator,
      setIndicator,
      producer,
      setProducer,
      type,
      setType,
      weight,
      setWeight,
      nextHU,
      setNextHU,
      nextSP,
      setNextSP,
      trucks,
      setTrucks,

      // trailers
      trailerId,
      setTrailerId,
      trailer,
      setTrailer,
      trailers,
      setTrailers,

      // functions
      resMessage,
      setResMessage,
      topLabel,
      setTopLabel,
      page,
      setPage,
      open,
      setOpen,
      anchorRef,
      openAlert,
      setOpenAlert,
      appState,
      setAppState,
      rowsPerPage,
      setRowsPerPage,
      totalRows,
      setTotalRows,
      logOut,
      navigate,
      turnOffApp,
      handleToggle,
      handleClose,
      locatedFile,
      setLocatedFile,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
export const useData = () => useContext(AppContext) as IAppContext;
