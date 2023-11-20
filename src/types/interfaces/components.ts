export interface IDriver {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  licenseNumber: string;
  licenseValidity: string;
  licenseType: string;
  typeValidity: string;
  // codeNumber95: boolean | null;
  codeNumValidity: string;
  driverCardNum: string;
  driverCardValidity: string;
}

export interface ICompany {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
