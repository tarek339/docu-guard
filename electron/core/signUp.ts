import { ipcMain } from "electron";
import { IAdmin } from "../types/interfaces";
import { adminModel as AdminUser } from "../../backend/models/adminModel";

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
    console.log("user saved");
  } catch (error) {
    console.log(error);
  }
};

export function signUp() {
  ipcMain.handle("create-new-admin", (_event, admin: IAdmin) => {
    try {
      logSignUp(admin);
    } catch (error) {
      console.log(error);
    }
  });
}
