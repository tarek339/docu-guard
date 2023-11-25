import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IParsedUser } from "../../../types/interfaces/components";
import { IAdminContext } from "../../../types/interfaces/adminContext";
import { useFunctionsData } from "../functions/FunctionsContext";

export const AdminContext = createContext({});

export function AdminContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setResMessage } = useFunctionsData();

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

      createAdmin,
      getAdminProfile,
      regetAdminProfile,
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

      createAdmin,
      getAdminProfile,
      regetAdminProfile,
    ]
  );

  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
}

export const useAdminData = () => useContext(AdminContext) as IAdminContext;
