import { IAdmin } from "../../types/interfaces";
import { adminModel as AdminUser } from "../../../backend/models/adminModel";
import { ipcMain } from "electron";

// edit admin
const readDataBase = async (admin: IAdmin) => {
  try {
    const adminUser = await AdminUser.findOne(admin.adminId);
    adminUser.companyName = admin.companyName;
    adminUser.adminName = admin.adminName;
    adminUser.email = admin.email;
    adminUser.password = admin.password;
    adminUser.confirmPassword = admin.confirmPassword;
    await adminUser.save();
    console.log("admin profile data changed");
  } catch (error) {
    console.log(error);
  }
};

export function editAdmin() {
  ipcMain.handle("edit-admin", (event, admin: IAdmin) => {
    try {
      readDataBase(admin);
    } catch (error) {
      console.log(error);
    }
  });
}
