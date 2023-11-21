import { ipcMain } from "electron";
import { IAdmin } from "../types/interfaces";
import fs from "fs";

const logSignUp = (admin: IAdmin) => {
  const file = `database/admin.json`;
  let newProfile = {
    admin: {
      id: admin.id,
      companyName: admin.companyName,
      adminName: admin.adminName,
      email: admin.email,
      password: admin.password,
      confirmPassword: admin.confirmPassword,
    },
  };
  try {
    fs.promises.writeFile(file, JSON.stringify(newProfile, null, 2));
  } catch (error) {
    console.log(error);
  }
};

export function signUp() {
  ipcMain.handle("create-new-admin", (event, admin: IAdmin) => {
    try {
      logSignUp(admin);
      event.sender.send("send-message", "Sign up succeeded");
    } catch (error) {
      console.log(error);
    }
  });
}
