import { IDriver } from "./properties";

export interface IDriverContext {
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

  createNewDriver: () => void;
  fetchDrivers: () => void;
  fetchDriver: () => void;
  editDriver: () => void;
  deleteDriver: () => void;
  resetDriver: () => void;
}
