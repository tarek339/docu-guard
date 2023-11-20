export interface IDriver {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  licenseValidity: string;
  licenseType: string;
  typeValidity: string;
  codeNumValidity: string;
  driverCardNum: string;
  driverCardValidity: string;
}

export interface IAdmin {
  companyName: string;
  adminName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
