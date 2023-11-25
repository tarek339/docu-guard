import { IpcRendererEvent } from "electron";
import { IAdmin, IDriver } from "./interfaces/components";

type CallbackType = (event: IpcRendererEvent, ...args: any[]) => void;

declare global {
  interface Window {
    api: {
      signUp: (admin: IAdmin) => void;
      signIn: (reqAdminName: string, reqPassword: string) => void;
      fetchAdmin: (callback: CallbackType) => void;
      fetchAdminId: (callback: CallbackType) => void;
      editProfile: (admin: IAdmin) => void;

      sendMessage: (callback: CallbackType) => void;

      createDriver: (driver: IDriver) => void;
      fetchDrivers: (drivers: IDriver[]) => void;
      sendDrivers: (callback: CallbackType) => void;
      fetchDriver: (id: string) => void;
      sendDriver: (callback: CallbackType) => void;
      editDriver: (driver: IDriver) => void;
      deleteDriver: (driverId: string) => void;
      backUpDriver: () => void;

      turnOffApp: (logOut: void) => void;
      resetStates: (logOut: void) => void;
    };
  }
}
