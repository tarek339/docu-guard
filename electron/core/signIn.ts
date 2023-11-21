import { ipcMain } from "electron";
import fs from "fs";
import { IAdmin } from "../types/interfaces";

let success: boolean;
let adminUser: IAdmin;
const checkRequest = (adminName: string, password: string) => {
  const file = `database/company.json`;
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const profile: IAdmin = jsonData.adminProfile;
    const reqEmail = adminName;
    const reqPassword = password;
    adminUser = profile;
    reqEmail === profile.adminName && reqPassword === profile.password
      ? (success = true)
      : (success = false);
  } catch (error) {
    console.log(error);
  }
};

export function signIn() {
  ipcMain.handle("sign-in", (event, adminName: string, password: string) => {
    try {
      checkRequest(adminName, password);
      if (success) event.sender.send("send-admin", adminUser);
      else event.sender.send("send-message", "failed");
    } catch (error) {
      console.log(error);
    }
  });
}
