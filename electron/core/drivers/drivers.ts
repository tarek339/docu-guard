import { ipcMain } from "electron";
import { IDriver } from "../../types/interfaces";
import fs from "fs";
import { browserWindow } from "../../main";
import { driverModel as Driver } from "../../../backend/models/driverModel";

const file = "backend/json/drivers.json";
// create driver
export function createDriver() {
  ipcMain.handle("create-new-driver", async (_event, driver: IDriver) => {
    try {
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
      await newDriver.save();
      browserWindow?.webContents.send("send-message", "Driver created");
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch profile
export function fetchDriver() {
  ipcMain.handle("fetch-driver", (event, id: string) => {
    try {
      const data = fs.readFileSync(file, "utf-8");
      const jsonData = JSON.parse(data);
      const drivers: IDriver[] = jsonData.drivers;
      const reqId = id;
      const driver = drivers.find((driver: IDriver) => driver.id === reqId);
      if (!driver) return;
      driver;
      event.sender.send("send-driver", driver);
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch all drivers
export function fetchDrivers() {
  ipcMain.handle("fetch-drivers", (event) => {
    try {
      const data = fs.readFileSync(file, "utf-8");
      const jsonData = JSON.parse(data);
      const drivers: IDriver[] = jsonData.drivers;
      drivers;
      event.sender.send("send-drivers", drivers);
    } catch (error) {
      console.log(error);
    }
  });
}

// edit driver
export function editDriver() {
  ipcMain.handle("edit-driver", (_event, comingData: IDriver) => {
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
export function deleteDriver() {
  ipcMain.handle("delete-driver", (_event, reqId: string) => {
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
      browserWindow?.webContents.send("send-message", "Driver deleted");
    } catch (error) {
      console.log(error);
    }
  });
}
