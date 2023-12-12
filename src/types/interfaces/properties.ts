export interface IAdmin {
  id: string;
  companyName: string;
  adminName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IValues {
  adminName: string;
  password: string;
}

export interface IParsedUser {
  parsedId: string;
  parsedName: string;
  parsedCompanyName: string;
  parsedEmail: string;
}

export interface IDriver {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  houseNum: string;
  zipCode: string;
  location: string;
  licenseNumber: string;
  licenseValidity: string;
  licenseType: string;
  typeValidity: string;
  codeNum: string;
  codeNumValidity: string;
  driverCardNum: string;
  driverCardValidity: string;
}

export interface ITruck {
  id: string;
  indicator: string;
  producer: string;
  type: string;
  weight: string;
  nextHU: string;
  nextSP: string;
}

export interface ITrailer {
  id: string;
  indicator: string;
  producer: string;
  type: string;
  weight: string;
  nextHU: string;
  nextSP: string;
}
