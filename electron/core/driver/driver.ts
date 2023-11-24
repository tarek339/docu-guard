import { ipcMain } from "electron";
import { IDriver } from "../../types/interfaces";
import fs from "fs";

const file = "backend/json/drivers.json";

// create driver
const logDrivers = (driver: IDriver): void => {
  let newPerson = {
    drivers: [
      {
        id: driver.id,
        firstName: driver.firstName,
        lastName: driver.lastName,
        phoneNumber: driver.phoneNumber,
        licenseNumber: driver.licenseNumber,
        licenseValidity: driver.licenseValidity,
        licenseType: driver.licenseType,
        typeValidity: driver.typeValidity,
        codeNumValidity: driver.codeNumValidity,
        driverCardNum: driver.driverCardNum,
        driverCardValidity: driver.driverCardValidity,
      },
    ],
  };
  try {
    fs.readFile(file, "utf-8", (_err, data) => {
      if (data) {
        const oldJsonData = JSON.parse(data);
        const newJsonData = newPerson;
        const oldDrivers = oldJsonData.drivers;
        const newDrivers = newJsonData.drivers;

        let oldDriversArr: IDriver[] = [];
        let newDriversArr: IDriver[] = [];

        for (let i in oldDrivers) oldDriversArr.push(oldDrivers[i]);
        for (let i in newDrivers) newDriversArr.push(newDrivers[i]);
        let newArr = oldDriversArr.concat(newDriversArr);

        let jsonData = {
          drivers: newArr,
        };
        fs.promises.writeFile(file, JSON.stringify(jsonData, null, 2));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export function createDriver() {
  ipcMain.handle("create-new-driver", (event, driver: IDriver) => {
    try {
      logDrivers(driver);
      event.sender.send("send-message", "Driver created");
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
    if (driver) {
      profile = driver;
    } else {
      profile = undefined;
      console.log("Driver not found");
    }
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
    const file = "database/drivers.json";
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const drivers = jsonData.drivers;
    const updatedDrivers = drivers.map((driver: IDriver) => {
      if (driver.id === comingData.id) {
        driver.firstName = comingData.firstName;
        driver.lastName = comingData.lastName;
        driver.phoneNumber = comingData.phoneNumber;
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
  ipcMain.handle("edit-driver", (event, driver: IDriver) => {
    try {
      readEdit(driver);
      event.sender.send("send-message", "Driver data successfully changed");
    } catch (error) {
      console.log(error);
    }
  });
}

// delete driver
const readDelete = (reqId: string) => {
  try {
    const file = "database/drivers.json";
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
  ipcMain.handle("delete-driver", (event, driverId: string) => {
    try {
      readDelete(driverId);
      event.sender.send("send-message", "Driver deleted");
    } catch (error) {
      console.log(error);
    }
  });
}
