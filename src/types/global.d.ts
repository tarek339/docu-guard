import { IpcRendererEvent } from "electron";
import {
  IAdmin,
  IDriver,
  ITrailer,
  ITruck,
  IValues,
} from "./interfaces/properties";

type CallbackType = (event: IpcRendererEvent, ...args: any[]) => void;

declare global {
  interface Window {
    api: {
      signUp: (admin: IAdmin) => void;
      signIn: (values: IValues) => void;
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
      uploadDriverFile: (path: string | undefined) => void;

      createTruck: (truck: ITruck) => void;
      fetchTrucks: (trucks: ITruck[]) => void;
      sendTrucks: (callback: CallbackType) => void;
      fetchTruck: (id: string) => void;
      sendTruck: (callback: CallbackType) => void;
      editTruck: (truck: ITruck) => void;
      deleteTruck: (truckId: string) => void;

      createTrailer: (trailer: ITrailer) => void;
      fetchTrailers: (trailers: ITruck[]) => void;
      sendTrailers: (callback: CallbackType) => void;
      fetchTrailer: (id: string) => void;
      sendTrailer: (callback: CallbackType) => void;
      editTrailer: (trailer: ITrailer) => void;
      deleteTrailer: (trailerId: string) => void;

      turnOffApp: (logOut: void) => void;
      clearAdmin: (callback: CallbackType) => void;

      sendConfig: (locale: string) => void;
      getConfig: () => void;
    };
  }
}
