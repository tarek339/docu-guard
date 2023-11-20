import { ipcMain } from "electron";
import fs from "fs";
import { IAdmin } from "../types/interfaces";

let success: boolean;
const checkRequest = (email: string, password: string) => {
  const file = `database/company.json`;
  try {
    const data = fs.readFileSync(file, "utf-8");
    const jsonData = JSON.parse(data);
    const profile: IAdmin = jsonData.companyProfile;
    const reqEmail = email;
    const reqPassword = password;
    reqEmail === profile.email && reqPassword === profile.password
      ? (success = true)
      : (success = false);
  } catch (error) {
    console.log(error);
  }
};

export function signIn() {
  ipcMain.handle("sign-in", (event, email, password) => {
    try {
      checkRequest(email, password);
      if (success) event.sender.send("send-message", "verified");
      else event.sender.send("send-message", "failed");
    } catch (error) {
      console.log(error);
    }
  });
}
