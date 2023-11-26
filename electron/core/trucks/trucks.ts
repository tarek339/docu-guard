import { ipcMain } from "electron";
import { ITruck } from "../../types/interfaces";
import fs from "fs";
import { browserWindow } from "../../main";

const file = "backend/json/trucks.json";

// create truck
const logTruck = (truck: ITruck): void => {
  let newTruck = {
    trucks: [
      {
        id: truck.id,
        indicator: truck.indicator,
        producer: truck.producer,
        type: truck.type,
        weight: truck.weight,
        nextHU: truck.nextHU,
        nextSP: truck.nextSP,
      },
    ],
  };
  try {
    fs.readFile(file, "utf-8", (_err, data) => {
      if (data) {
        const oldJsonData = JSON.parse(data);
        const newJsonData = newTruck;
        const oldTrucks = oldJsonData.trucks;
        const newTrucks = newJsonData.trucks;

        let oldTrucksArr: ITruck[] = [];
        let newTrucksArr: ITruck[] = [];

        for (let i in oldTrucks) oldTrucksArr.push(oldTrucks[i]);
        for (let i in newTrucks) newTrucksArr.push(newTrucks[i]);
        let newArr = oldTrucksArr.concat(newTrucksArr);

        let jsonData = {
          trucks: newArr,
        };
        fs.promises.writeFile(file, JSON.stringify(jsonData, null, 2));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export function createTruck() {
  ipcMain.handle("create-truck", (_event, truck: ITruck) => {
    try {
      logTruck(truck);
      browserWindow?.webContents.send("send-message", "Truck saved");
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch all trucks
let listing: ITruck[] | undefined;
const readTrucks = () => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trucks: ITruck[] = jsonData.trucks;
    listing = trucks;
  } catch (error) {
    console.log(error);
  }
};

export function fetchTrucks() {
  ipcMain.handle("fetch-trucks", (event) => {
    try {
      readTrucks();
      event.sender.send("send-trucks", listing);
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch profile
let truckProfile: ITruck | undefined;
const readTruck = (id: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trucks: ITruck[] = jsonData.trucks;
    const reqId = id;
    const truck = trucks.find((truck: ITruck) => truck.id === reqId);
    if (truck) {
      truckProfile = truck;
    } else {
      truckProfile = undefined;
      console.log("truck not found");
    }
  } catch (error) {
    console.log(error);
  }
};

export function fetchTruck() {
  ipcMain.handle("fetch-truck", (event, id: string) => {
    try {
      readTruck(id);
      event.sender.send("send-truck", truckProfile);
    } catch (error) {
      console.log(error);
    }
  });
}

// edit truck
const readEdit = (comingData: ITruck) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trucks = jsonData.trucks;
    const updatedTrucks = trucks.map((truck: ITruck) => {
      if (truck.id === comingData.id) {
        truck.indicator = comingData.indicator;
        truck.producer = comingData.producer;
        truck.type = comingData.type;
        truck.weight = comingData.weight;
        truck.nextHU = comingData.nextHU;
        truck.nextSP = comingData.nextSP;
      }
      return truck;
    });
    const updatedData = JSON.stringify({ trucks: updatedTrucks }, null, 2);
    fs.promises.writeFile(file, updatedData, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

export function editTruck() {
  ipcMain.handle("edit-truck", (_event, truck: ITruck) => {
    try {
      readEdit(truck);
      browserWindow?.webContents.send(
        "send-message",
        "truck data successfully changed"
      );
    } catch (error) {
      console.log(error);
    }
  });
}

// delete truck
const readDelete = (reqId: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trucks = jsonData.trucks;
    const updateDb = trucks.filter((truck: ITruck) => {
      return truck.id !== reqId;
    });
    let updatedData;
    if (updateDb.length > 0) {
      updatedData = JSON.stringify({ trucks: updateDb }, null, 2);
    } else {
      updatedData = JSON.stringify({ trucks: [] }, null, 2);
    }
    fs.promises.writeFile(file, updatedData, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

export function deleteTruck() {
  ipcMain.handle("delete-truck", (_event, truckId: string) => {
    try {
      readDelete(truckId);
      browserWindow?.webContents.send("send-message", "truck deleted");
    } catch (error) {
      console.log(error);
    }
  });
}
