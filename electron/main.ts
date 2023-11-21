import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "node:path";
// import { screen } from "electron";
import {
  createDriver,
  deleteDriver,
  editDriver,
  fetchDriver,
  fetchDrivers,
} from "./core/driver";
import { createFiles } from "./createFiles";
import { signUp } from "./core/signUp";
import { signIn } from "./core/signIn";
import mongoose from "mongoose";

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
  // const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  browserWindow = new BrowserWindow({
    icon: path.join(process.env.PUBLIC, "electron-vite.svg"),
    width: 1400,
    height: 1000,
    resizable: true,
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

app.on("window-all-closed", () => {
  app.quit();
});

const dbName = "docu-guard";
const url = `mongodb+srv://tarek:Sony2020@cluster0.ywzi97j.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app
  .whenReady()
  .then(createWindow)
  .then(() => {
    // mongoose.connect(url);
    createFiles();
  });

createDriver();
signUp();
signIn();
fetchDriver();
fetchDrivers();
editDriver();
deleteDriver();
