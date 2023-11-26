import { IpcRendererEvent } from "electron";
import { IAdmin, IDriver, ITrailer, ITruck } from "./interfaces/properties";

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
      sendResponse: (callback: CallbackType) => void;

      createDriver: (driver: IDriver) => void;
      fetchDrivers: (drivers: IDriver[]) => void;
      sendDrivers: (callback: CallbackType) => void;
      fetchDriver: (id: string) => void;
      sendDriver: (callback: CallbackType) => void;
      editDriver: (driver: IDriver) => void;
      deleteDriver: (driverId: string) => void;
      backUpDriver: () => void;

      createTruck: (truck: ITruck) => void;
      fetchTrucks: (trucks: ITruck[]) => void;
      sendTrucks: (callback: CallbackType) => void;
      fetchTruck: (id: string) => void;
      sendTruck: (callback: CallbackType) => void;
      editTruck: (truck: ITruck) => void;

      createTrailer: (trailer: ITrailer) => void;
      fetchTrailers: (trailers: ITruck[]) => void;
      sendTrailers: (callback: CallbackType) => void;
      fetchTrailer: (id: string) => void;
      sendTrailer: (callback: CallbackType) => void;
      editTrailer: (trailer: ITrailer) => void;

      turnOffApp: (logOut: void) => void;
      resetStates: (callback: CallbackType) => void;
    };
  }
}
