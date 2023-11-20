import { ipcMain } from "electron";
import { IAdmin } from "../types/interfaces";
import fs from "fs";

const logSignUp = (company: IAdmin) => {
  const file = `database/company.json`;
  let newProfile = {
    companyProfile: {
      companyName: company.companyName,
      email: company.email,
      password: company.password,
      confirmPassword: company.confirmPassword,
    },
  };
  try {
    fs.promises.writeFile(file, JSON.stringify(newProfile, null, 2));
  } catch (error) {
    console.log(error);
  }
};

export function signUp() {
  ipcMain.handle("create-new-company", (event, company: IAdmin) => {
    try {
      logSignUp(company);
      event.sender.send("send-message", "Sign up succeeded");
    } catch (error) {
      console.log(error);
    }
  });
}
