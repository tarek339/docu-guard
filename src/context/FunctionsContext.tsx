import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAdminData } from "./AdminContext";
import { IFunctionsContext } from "../types/interfaces/functionsContext";

export const FunctionsContext = createContext({});

export function FunctionsContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const {
    setAdminId,
    setAdminName,
    setCompanyName,
    setEmail,
    setConfirmPassword,
    setPassword,
    admin,
    adminId,
  } = useAdminData();

  const [resMessage, setResMessage] = useState(null);
  const [topLabel, setTopLabel] = useState(false);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  // handle menu
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

  const navigateBack = () => {
    navigate("/drivers");
  };

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

      navigateBack,
      logOut,
      navigate,
      turnOffApp,
      handleToggle,
      handleClose,
    }),
    [
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

      navigateBack,
      logOut,
      navigate,
      turnOffApp,
      handleToggle,
      handleClose,
    ]
  );

  return (
    <FunctionsContext.Provider value={contextValue}>
      {props.children}
    </FunctionsContext.Provider>
  );
}

export const useFunctionsData = () =>
  useContext(FunctionsContext) as IFunctionsContext;
