import { app, ipcMain } from "electron";

export function trunOff() {
  ipcMain.on("turn-off-app", (_event, logOut: void) => {
    logOut;
    app.quit();
  });
}
