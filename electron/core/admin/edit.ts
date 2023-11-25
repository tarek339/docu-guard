import { IAdmin } from "../../types/interfaces";
import { adminModel as AdminUser } from "../../../backend/models/adminModel";
import { ipcMain } from "electron";
import { browserWindow } from "../../main";

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
  } catch (error) {
    console.log(error);
  }
};

export function editAdmin() {
  ipcMain.handle("edit-admin", async (_event, admin: IAdmin) => {
    try {
      await readDataBase(admin);
      browserWindow?.webContents.send(
        "send-message",
        "Data sccessfully changed"
      );
    } catch (error) {
      console.log(error);
    }
  });
}
