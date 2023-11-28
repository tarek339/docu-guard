import { IAdmin } from "../properties";

export interface IAdminContext {
  adminId: string;
  setAdminId: React.Dispatch<React.SetStateAction<string>>;
  admin: IAdmin;
  setAdmin: React.Dispatch<React.SetStateAction<IAdmin>>;
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
  adminName: string;
  setAdminName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;

  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;

  createAdmin: () => void;
  getAdminProfile: () => void;
  editAmin: () => void;
}
