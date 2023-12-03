import { IpcRendererEvent, contextBridge, ipcRenderer } from "electron";
import { IAdmin, IDriver, ITrailer, ITruck, IValues } from "./types/interfaces";

type CallbackType = (event: IpcRendererEvent, ...args: any[]) => void;

contextBridge.exposeInMainWorld("api", {
  signUp: (admin: IAdmin) => {
    ipcRenderer.invoke("create-new-admin", admin);
  },
  signIn: (values: IValues) => {
    ipcRenderer.invoke("sign-in", values);
  },
  fetchAdmin: (callback: CallbackType) => {
    ipcRenderer.on("send-admin", callback);
  },
  fetchAdminId: (callback: CallbackType) => {
    ipcRenderer.on("send-adminId", callback);
  },
  editProfile: (admin: IAdmin) => {
    ipcRenderer.invoke("edit-admin", admin);
  },

  sendMessage: (callback: CallbackType) => {
    ipcRenderer.on("send-message", callback);
  },
  sendResponse: (callback: CallbackType) => {
    ipcRenderer.on("send-response", callback);
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
  backUpDriver: () => {
    ipcRenderer.invoke("back-up-driver");
  },

  createTruck: (truck: ITruck) => {
    ipcRenderer.invoke("create-truck", truck);
  },
  fetchTrucks: (trucks: ITruck[]) => {
    ipcRenderer.invoke("fetch-trucks", trucks);
  },
  sendTrucks: (callback: CallbackType) => {
    ipcRenderer.on("send-trucks", callback);
  },
  fetchTruck: (trucks: ITruck[]) => {
    ipcRenderer.invoke("fetch-truck", trucks);
  },
  sendTruck: (callback: CallbackType) => {
    ipcRenderer.on("send-truck", callback);
  },
  editTruck: (truck: ITruck) => {
    ipcRenderer.invoke("edit-truck", truck);
  },
  deleteTruck: (truckId: string) => {
    ipcRenderer.invoke("delete-truck", truckId);
  },

  createTrailer: (trailer: ITruck) => {
    ipcRenderer.invoke("create-trailer", trailer);
  },
  fetchTrailers: (trailers: ITrailer[]) => {
    ipcRenderer.invoke("fetch-trailers", trailers);
  },
  sendTrailers: (callback: CallbackType) => {
    ipcRenderer.on("send-trailers", callback);
  },
  fetchTrailer: (trailers: ITrailer[]) => {
    ipcRenderer.invoke("fetch-trailer", trailers);
  },
  sendTrailer: (callback: CallbackType) => {
    ipcRenderer.on("send-trailer", callback);
  },
  editTrailer: (trailer: ITrailer) => {
    ipcRenderer.invoke("edit-trailer", trailer);
  },
  deleteTrailer: (trailerId: string) => {
    ipcRenderer.invoke("delete-trailer", trailerId);
  },

  turnOffApp: (logOut: void) => {
    ipcRenderer.send("turn-off-app", logOut);
  },
  clearAdmin: (callback: CallbackType) => {
    ipcRenderer.on("clear-state-locale-storage", callback);
  },
  sendConfig: (locale: string) => {
    ipcRenderer.invoke("send-config", locale);
  },
  getConfig: () => {
    ipcRenderer.invoke("get-config");
  },
});
