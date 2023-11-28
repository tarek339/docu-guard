import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IFunctionsContext } from "../../../types/interfaces/functionsContext";
import { useAdminData } from "../admin/AdminContext";

export const FunctionsContext = createContext({});

export function FunctionsContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setAdminId, setAdmin, setAdminName, setPassword, admin, adminId } =
    useAdminData();

  const [resMessage, setResMessage] = useState(null);

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
    window.api.clearAdmin(() => {
      logOut();
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      resMessage,
      setResMessage,

      navigateBack,
      logOut,
      navigate,
      turnOffApp,
    }),
    [resMessage, setResMessage, navigateBack, logOut, navigate, turnOffApp]
  );

  return (
    <FunctionsContext.Provider value={contextValue}>
      {props.children}
    </FunctionsContext.Provider>
  );
}

export const useFunctionsData = () =>
  useContext(FunctionsContext) as IFunctionsContext;
