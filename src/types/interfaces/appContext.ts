import { IAdmin, IDriver } from "./components";

export interface IAppContext {
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

  resMessage: string | null;
  setResMessage: React.Dispatch<React.SetStateAction<string | null>>;

  driver: IDriver;
  setDriver: React.Dispatch<React.SetStateAction<IDriver>>;
  drivers: IDriver[];
  setDrivers: React.Dispatch<React.SetStateAction<IDriver[]>>;
  driverId: string;
  setDriverId: React.Dispatch<React.SetStateAction<string>>;

  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  licenseNumber: string;
  setLicenseNumber: React.Dispatch<React.SetStateAction<string>>;
  licenseValidity: string;
  setLicenseValidity: React.Dispatch<React.SetStateAction<string>>;
  licenseType: string;
  setLicenseType: React.Dispatch<React.SetStateAction<string>>;
  typeValidity: string;
  setTypeValidity: React.Dispatch<React.SetStateAction<string>>;
  codeNumValidity: string;
  setCodeNumValidity: React.Dispatch<React.SetStateAction<string>>;
  driverCardNum: string;
  setDriverCardNum: React.Dispatch<React.SetStateAction<string>>;
  driverCardValidity: string;
  setDriverCardValidity: React.Dispatch<React.SetStateAction<string>>;

  createAdmin: () => void;
  getAdminProfile: () => void;
  reset: () => void;
  navigateBack: () => void;
  fetchDrivers: () => void;
  fetchDriver: () => void;
  createNewDriver: () => void;
  editDriver: () => void;
  deleteData: () => void;
  logOut: () => void;
  regetAdminProfile: () => void;
  editAmin: () => void;
  turnOffApp: () => void;
}
