import { ITruck } from "./properties";

export interface ITruckContext {
  truckId: string;
  setTruckId: React.Dispatch<React.SetStateAction<string>>;
  truck: ITruck;
  setTruck: React.Dispatch<React.SetStateAction<ITruck>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  indicator: string;
  setIndicator: React.Dispatch<React.SetStateAction<string>>;
  producer: string;
  setProducer: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  weight: string;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  nextHU: string;
  setNextHU: React.Dispatch<React.SetStateAction<string>>;
  nextSP: string;
  setNextSP: React.Dispatch<React.SetStateAction<string>>;
  trucks: ITruck[];
  setTrucks: React.Dispatch<React.SetStateAction<ITruck[]>>;

  createNewTruck: () => void;
  fetchTrucks: () => void;
  fetchTruck: () => void;
  editTruck: () => void;
}
