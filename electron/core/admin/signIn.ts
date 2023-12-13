import { ipcMain } from "electron";
import { adminModel as AdminUser } from "../../../backend/models/adminModel";
import { IAdmin, IParsedUser, IValues } from "../../types/interfaces";
import { browserWindow } from "../../main";

let authorized: boolean = false;
let adminUser: IAdmin;
let parsedUser: IParsedUser;
const checkRequest = async (values: IValues) => {
  try {
    const admin = await AdminUser.findOne({
      adminName: values.adminName,
      password: values.password,
    });
    if (admin) {
      adminUser = admin;
      authorized = true;
    }
    let parsedId = adminUser.id;
    let parsedName = adminUser.adminName;
    let parsedCompanyName = adminUser.companyName;
    let parsedEmail = adminUser.email;

    let parsed = {
      parsedId,
      parsedName,
      parsedCompanyName,
      parsedEmail,
    };

    parsedUser = parsed;
  } catch (error) {
    console.log("Wrong name or password");
  }
};

export function signIn() {
  ipcMain.handle("sign-in", async (event, values: IValues) => {
    try {
      await checkRequest(values);
      if (!authorized) {
        browserWindow?.webContents.send(
          "send-message",
          "Wrong name or password"
        );
      }
      event.sender.send("send-admin", parsedUser);
      setTimeout(() => {
        authorized = false;
      }, 1000);
    } catch (error) {
      console.log(`ipcMain: ${error}`);
    }
  });
}
