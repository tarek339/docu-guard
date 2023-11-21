import { ipcMain } from "electron";
import fs from "fs";
import { IAdmin } from "../types/interfaces";

let success: boolean;
let adminUser: IAdmin;
const checkRequest = (adminName: string, password: string) => {
  const file = `database/admin.json`;
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const profile: IAdmin = jsonData.admin;
    const reqName = adminName;
    const reqPassword = password;
    adminUser = profile;
    reqName === profile.adminName && reqPassword === profile.password
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
      console.log(success);
      const filteredAdminUser = {
        ...adminUser,
        password: "***",
        confirmPassword: "***",
      };
      if (success) event.sender.send("send-admin", filteredAdminUser);
      else event.sender.send("send-message", "failed");
    } catch (error) {
      console.log(error);
    }
  });
}
