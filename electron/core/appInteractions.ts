import { app, ipcMain } from "electron";
import fs from "fs";
import { browserWindow } from "../main";
import { ISettings } from "../types/interfaces";

const file = "electron/config/config.json";

export function trunOff() {
  ipcMain.on("turn-off-app", (_event, logOut: void) => {
    logOut;
    app.quit();
  });
}

// read config.json
const readFile = (locale: string) => {
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    let oldLocale = jsonData.settings.locale;
    oldLocale = locale;
    const updatedLocale = JSON.stringify({ settings: { locale } }, null, 2);
    fs.promises.writeFile(file, updatedLocale, "utf-8");
    browserWindow?.webContents.send("send-response", locale);
  } catch (error) {
    console.log(error);
  }
};

export function handleConfig() {
  ipcMain.handle("send-config", (_event, locale: string) => {
    readFile(locale);
  });
}

// get config
export function getConfig() {
  ipcMain.handle("get-config", (_event) => {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const oldLocale: ISettings = jsonData.settings;
    browserWindow?.webContents.send("send-response", oldLocale.locale);
  });
}
