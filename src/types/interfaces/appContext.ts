import { IAdmin, IDriver, ITrailer, ITruck } from "./properties";

export interface IAppContext {
  // ADMIN
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
  adminFormik: any;
  formiks: any;

  // DRIVER
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
  codeNum: string;
  setCodeNum: React.Dispatch<React.SetStateAction<string>>;
  codeNumValidity: string;
  setCodeNumValidity: React.Dispatch<React.SetStateAction<string>>;
  driverCardNum: string;
  setDriverCardNum: React.Dispatch<React.SetStateAction<string>>;
  driverCardValidity: string;
  setDriverCardValidity: React.Dispatch<React.SetStateAction<string>>;

  fetchDrivers: () => void;
  fetchDriver: () => void;
  editDriver: () => void;
  deleteDriver: () => void;
  resetDriver: () => void;
  driverFormik: any;

  // TRUCKS
  truckId: string;
  setTruckId: React.Dispatch<React.SetStateAction<string>>;
  truck: ITruck;
  setTruck: React.Dispatch<React.SetStateAction<ITruck>>;
  indicator: string;
  setIndicator: React.Dispatch<React.SetStateAction<string>>;
  producer: string;
  setProducer: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  nextHU: string;
  setNextHU: React.Dispatch<React.SetStateAction<string>>;
  nextSP: string;
  setNextSP: React.Dispatch<React.SetStateAction<string>>;
  trucks: ITruck[];
  setTrucks: React.Dispatch<React.SetStateAction<ITruck[]>>;

  // TRAILERS
  trailerId: string;
  setTrailerId: React.Dispatch<React.SetStateAction<string>>;
  trailer: ITrailer;
  setTrailer: React.Dispatch<React.SetStateAction<ITrailer>>;
  trailers: ITrailer[];
  setTrailers: React.Dispatch<React.SetStateAction<ITrailer[]>>;

  // FUNCTIONS
  resMessage: string;
  setResMessage: React.Dispatch<React.SetStateAction<string>>;
  topLabel: boolean;
  setTopLabel: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  anchorRef: React.RefObject<HTMLButtonElement>;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  setTotalRows: React.Dispatch<React.SetStateAction<number>>;

  navigateBack: () => void;
  reset: () => void;
  logOut: () => void;
  turnOffApp: () => void;
  handleToggle: () => void;
  handleClose: () => void;
  handleCloseAlert: () => void;
}
