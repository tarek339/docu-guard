import { ipcMain } from "electron";
import fs from "fs";
import { browserWindow } from "../../main";
import { ITrailer } from "../../types/interfaces";

const file = "backend/json/trailers.json";

// create Trailer
const logTrailer = (trailer: ITrailer): void => {
  let newTrailer = {
    trailers: [
      {
        id: trailer.id,
        indicator: trailer.indicator,
        producer: trailer.producer,
        type: trailer.type,
        weight: trailer.weight,
        nextHU: trailer.nextHU,
        nextSP: trailer.nextSP,
      },
    ],
  };
  try {
    fs.readFile(file, "utf-8", (_err, data) => {
      if (data) {
        const oldJsonData = JSON.parse(data);
        const newJsonData = newTrailer;
        const oldTrailers = oldJsonData.trailers;
        const newTrailers = newJsonData.trailers;

        let oldTrailersArr: ITrailer[] = [];
        let newTrailersArr: ITrailer[] = [];

        for (let i in oldTrailers) oldTrailersArr.push(oldTrailers[i]);
        for (let i in newTrailers) newTrailersArr.push(newTrailers[i]);
        let newArr = oldTrailersArr.concat(newTrailersArr);

        let jsonData = {
          trailers: newArr,
        };
        fs.promises.writeFile(file, JSON.stringify(jsonData, null, 2));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export function createTrailer() {
  ipcMain.handle("create-trailer", (_event, trailer: ITrailer) => {
    try {
      logTrailer(trailer);
      browserWindow?.webContents.send("send-message", "Trailer saved");
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch all trailers
let listing: ITrailer[] | undefined;
const readTrailers = () => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trailers: ITrailer[] = jsonData.trailers;
    listing = trailers;
  } catch (error) {
    console.log(error);
  }
};

export function fetchTrailers() {
  ipcMain.handle("fetch-trailers", (event) => {
    try {
      readTrailers();
      event.sender.send("send-trailers", listing);
    } catch (error) {
      console.log(error);
    }
  });
}

// fetch profile
let trailerProfile: ITrailer | undefined;
const readTrailer = (id: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trailers: ITrailer[] = jsonData.trailers;
    const reqId = id;
    const trailer = trailers.find((trailer: ITrailer) => trailer.id === reqId);
    if (trailer) {
      trailerProfile = trailer;
    } else {
      trailerProfile = undefined;
      console.log("trailer not found");
    }
  } catch (error) {
    console.log(error);
  }
};

export function fetchTrailer() {
  ipcMain.handle("fetch-trailer", (event, id: string) => {
    try {
      readTrailer(id);
      event.sender.send("send-trailer", trailerProfile);
    } catch (error) {
      console.log(error);
    }
  });
}

// edit trailer
const readEdit = (comingData: ITrailer) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const trailers = jsonData.trailers;
    const updatedTrailers = trailers.map((trailer: ITrailer) => {
      if (trailer.id === comingData.id) {
        trailer.indicator = comingData.indicator;
        trailer.producer = comingData.producer;
        trailer.type = comingData.type;
        trailer.weight = comingData.weight;
        trailer.nextHU = comingData.nextHU;
        trailer.nextSP = comingData.nextSP;
      }
      return trailer;
    });
    const updatedData = JSON.stringify({ trailers: updatedTrailers }, null, 2);
    fs.promises.writeFile(file, updatedData, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

export function editTrailer() {
  ipcMain.handle("edit-trailer", (_event, trailer: ITrailer) => {
    try {
      readEdit(trailer);
      browserWindow?.webContents.send(
        "send-message",
        "trailer data successfully changed"
      );
    } catch (error) {
      console.log(error);
    }
  });
}
