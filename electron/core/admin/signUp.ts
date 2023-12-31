import { ipcMain } from "electron";
import { IAdmin } from "../../types/interfaces";
import { adminModel as AdminUser } from "../../../backend/models/adminModel";
import { browserWindow } from "../../main";

const logSignUp = async (admin: IAdmin) => {
  const adminUser = new AdminUser({
    id: admin.id,
    companyName: admin.companyName,
    adminName: admin.adminName,
    email: admin.email,
    password: admin.password,
    confirmPassword: admin.confirmPassword,
  });
  try {
    await adminUser.save();
  } catch (error) {
    console.log(error);
  }
};

export function signUp() {
  ipcMain.handle("create-new-admin", (_event, admin: IAdmin) => {
    try {
      logSignUp(admin);
      browserWindow?.webContents.send("send-message", "Sign up succeed");
    } catch (error) {
      console.log(error);
    }
  });
}
