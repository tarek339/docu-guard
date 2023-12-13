import { ipcMain } from "electron";
import { IDriver } from "../../types/interfaces";
import fs from "fs";
import { browserWindow } from "../../main";
import { driverModel as Driver } from "../../../backend/models/driverModel";

const file = "backend/json/drivers.json";
// create driver
const logDriver = async (driver: IDriver) => {
  const newDriver = new Driver({
    id: driver.id,
    firstName: driver.firstName,
    lastName: driver.lastName,
    phoneNumber: driver.phoneNumber,
    street: driver.street,
    houseNum: driver.houseNum,
    zipCode: driver.zipCode,
    location: driver.location,
    licenseNumber: driver.licenseNumber,
    licenseValidity: driver.licenseValidity,
    licenseType: driver.licenseType,
    typeValidity: driver.typeValidity,
    codeNum: driver.codeNum,
    codeNumValidity: driver.codeNumValidity,
    driverCardNum: driver.driverCardNum,
    driverCardValidity: driver.driverCardValidity,
  });
  try {
    await newDriver.save();
  } catch (error) {
    console.log(error);
  }
};

export function createDriver() {
  ipcMain.handle("create-new-driver", (_event, driver: IDriver) => {
    try {
      logDriver(driver);
      browserWindow?.webContents.send("send-message", "Driver created");
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch profile
let profile: IDriver | undefined;
const readProfile = (id: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const drivers: IDriver[] = jsonData.drivers;
    const reqId = id;
    const driver = drivers.find((driver: IDriver) => driver.id === reqId);
    if (!driver) return;
    profile = driver;
  } catch (error) {
    console.log(error);
  }
};

export function fetchDriver() {
  ipcMain.handle("fetch-driver", (event, id: string) => {
    try {
      readProfile(id);
      event.sender.send("send-driver", profile);
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch all drivers
let listing: IDriver[] | undefined;
const readDrivers = () => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const drivers: IDriver[] = jsonData.drivers;
    listing = drivers;
  } catch (error) {
    console.log(error);
  }
};

export function fetchDrivers() {
  ipcMain.handle("fetch-drivers", (event) => {
    try {
      readDrivers();
      event.sender.send("send-drivers", listing);
    } catch (error) {
      console.log(error);
    }
  });
}

// edit driver
const readEdit = (comingData: IDriver) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const drivers = jsonData.drivers;
    const updatedDrivers = drivers.map((driver: IDriver) => {
      if (driver.id === comingData.id) {
        driver.firstName = comingData.firstName;
        driver.lastName = comingData.lastName;
        driver.phoneNumber = comingData.phoneNumber;
        driver.street = comingData.street;
        driver.houseNum = comingData.houseNum;
        driver.zipCode = comingData.zipCode;
        driver.location = comingData.location;
        driver.licenseNumber = comingData.licenseNumber;
        driver.licenseValidity = comingData.licenseValidity;
        driver.licenseType = comingData.licenseType;
        driver.typeValidity = comingData.typeValidity;
        driver.codeNumValidity = comingData.codeNumValidity;
        driver.driverCardNum = comingData.driverCardNum;
        driver.driverCardValidity = comingData.driverCardValidity;
      }
      return driver;
    });
    const updatedData = JSON.stringify({ drivers: updatedDrivers }, null, 2);
    fs.promises.writeFile(file, updatedData, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

export function editDriver() {
  ipcMain.handle("edit-driver", (_event, driver: IDriver) => {
    try {
      readEdit(driver);
      browserWindow?.webContents.send(
        "send-message",
        "Driver data successfully changed"
      );
    } catch (error) {
      console.log(error);
    }
  });
}

// delete driver
const readDelete = (reqId: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const drivers = jsonData.drivers;
    const updateDb = drivers.filter((driver: IDriver) => {
      return driver.id !== reqId;
    });
    let updatedData;
    if (updateDb.length > 0) {
      updatedData = JSON.stringify({ drivers: updateDb }, null, 2);
    } else {
      updatedData = JSON.stringify({ drivers: [] }, null, 2);
    }
    fs.promises.writeFile(file, updatedData, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

export function deleteDriver() {
  ipcMain.handle("delete-driver", (_event, driverId: string) => {
    try {
      readDelete(driverId);
      browserWindow?.webContents.send("send-message", "Driver deleted");
    } catch (error) {
      console.log(error);
    }
  });
}
