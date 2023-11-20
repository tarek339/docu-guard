import { IpcRendererEvent, contextBridge, ipcRenderer } from "electron";
import { IAdmin, IDriver } from "./types/interfaces";

type CallbackType = (event: IpcRendererEvent, ...args: any[]) => void;

contextBridge.exposeInMainWorld("api", {
  signUp: (company: IAdmin) => {
    ipcRenderer.invoke("create-new-company", company);
  },
  signIn: (email: string, password: string) => {
    ipcRenderer.invoke("sign-in", email, password);
  },
  sendMessage: (callback: CallbackType) => {
    ipcRenderer.on("send-message", callback);
  },
  createDriver: (driver: IDriver) => {
    ipcRenderer.invoke("create-new-driver", driver);
  },
  fetchDrivers: (drivers: IDriver[]) => {
    ipcRenderer.invoke("fetch-drivers", drivers);
  },
  sendDrivers: (callback: CallbackType) => {
    ipcRenderer.on("send-drivers", callback);
  },
  fetchDriver: (id: string) => {
    ipcRenderer.invoke("fetch-driver", id);
  },
  sendDriver: (callback: CallbackType) => {
    ipcRenderer.on("send-driver", callback);
  },
  editDriver: (driver: IDriver) => {
    ipcRenderer.invoke("edit-driver", driver);
  },
  deleteDriver: (driverId: string) => {
    ipcRenderer.invoke("delete-driver", driverId);
  },
});
