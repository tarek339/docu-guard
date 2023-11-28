import { app, BrowserWindow, ipcMain } from "electron";
import isDev from "electron-is-dev";
import path from "node:path";
import { screen } from "electron";
import {
  backUpDriver,
  createDriver,
  deleteDriver,
  editDriver,
  fetchDriver,
  fetchDrivers,
} from "./core/drivers/drivers";
import { createFiles } from "./createFiles";
import { signUp } from "./core/admin/signUp";
import { signIn } from "./core/admin/signIn";
import { connectToDatabase } from "../backend/database";
import { editAdmin } from "./core/admin/edit";
import { trunOff } from "./core/appInteractions";
import {
  createTruck,
  deleteTruck,
  editTruck,
  fetchTruck,
  fetchTrucks,
} from "./core/trucks/trucks";
import {
  createTrailer,
  deleteTrailer,
  editTrailer,
  fetchTrailer,
  fetchTrailers,
} from "./core/trailers/trailers";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

export let browserWindow: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  browserWindow = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    width: width,
    height: height,
    resizable: true,
    backgroundColor: "transparent",
    webPreferences: {
      nodeIntegration: false,
      webSecurity: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    browserWindow.webContents.openDevTools({ mode: "detach", activate: true });
  }
  // Test active push message to Renderer-process.
  browserWindow.webContents.on("did-finish-load", () => {
    browserWindow?.webContents.send(
      "main-process-message",
      new Date().toLocaleString()
    );
  });

  if (VITE_DEV_SERVER_URL) {
    browserWindow.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    browserWindow.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("before-quit", () => {
  browserWindow?.webContents.send("clear-state-locale-storage");
});
app.on("window-all-closed", () => {
  app.quit();
});

app
  .whenReady()
  .then(createWindow)
  .then(() => {
    createFiles();
    connectToDatabase();
  });

signUp();
signIn();
editAdmin();

createDriver();
fetchDriver();
fetchDrivers();
editDriver();
deleteDriver();
backUpDriver();

createTruck();
fetchTrucks();
fetchTruck();
editTruck();
deleteTruck();

createTrailer();
fetchTrailers();
fetchTrailer();
editTrailer();
deleteTrailer();

trunOff();
