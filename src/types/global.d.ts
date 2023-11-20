import { IpcRendererEvent } from "electron";
import { IAdmin, IDriver } from "./interfaces/components";

type CallbackType = (event: IpcRendererEvent, ...args: any[]) => void;

declare global {
  interface Window {
    api: {
      signUp: (company: IAdmin) => void;
      signIn: (email: string, password: string) => void;
      sendMessage: (callback: CallbackType) => void;
      createDriver: (driver: IDriver) => void;
      fetchDrivers: (drivers: IDriver[]) => void;
      sendDrivers: (callback: CallbackType) => void;
      fetchDriver: (id: string) => void;
      sendDriver: (callback: CallbackType) => void;
      editDriver: (driver: IDriver) => void;
      deleteDriver: (driverId: string) => void;
    };
  }
}
