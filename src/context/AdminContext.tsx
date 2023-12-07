import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IParsedUser } from "../../electron/types/interfaces";
import { IAdminContext } from "../types/interfaces";

export const AdminContext = createContext({});

export function AdminContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
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

      message,
      setMessage,

      getAdminProfile,
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

      message,
      setMessage,

      getAdminProfile,
    ]
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
}

export const useAdminData = () => useContext(AdminContext) as IAdminContext;
