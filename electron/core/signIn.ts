import { ipcMain } from "electron";
import { adminModel as AdminUser } from "../../backend/models/adminModel";
import { IAdmin, IParsedUser } from "../types/interfaces";

let authorized: boolean = false;
let adminUser: IAdmin;
let parsedUser: IParsedUser;
const checkRequest = async (reqAdminName: string, reqPassword: string) => {
  try {
    const admin = await AdminUser.findOne({
      adminName: reqAdminName,
      password: reqPassword,
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
  ipcMain.handle(
    "sign-in",
    async (event, reqAdminName: string, reqPassword: string) => {
      try {
        await checkRequest(reqAdminName, reqPassword);
        if (authorized) {
          event.sender.send("send-admin", parsedUser);
        } else event.sender.send("send-message", "Wrong name or password");
        setTimeout(() => {
          authorized = false;
        }, 1000);
      } catch (error) {
        console.log(`ipcMain: ${error}`);
      }
    }
  );
}
