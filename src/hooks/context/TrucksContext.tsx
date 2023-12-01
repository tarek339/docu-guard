import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useFunctionsData } from "./FunctionsContext";
import { ITruckContext } from "../../types/interfaces/trucksContext";
import { ITruck } from "../../types/interfaces/properties";

export const TrucksContext = createContext({});

export function TrucksContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setResMessage, resMessage } = useFunctionsData();

  const [truck, setTruck] = useState({
    id: "",
    indicator: "",
    producer: "",
    type: "",
    weight: "",
    nextHU: "",
    nextSP: "",
  });
  const [truckId, setTruckId] = useState("");
  const [indicator, setIndicator] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [nextHU, setNextHU] = useState("");
  const [nextSP, setNextSP] = useState("");
  const [trucks, setTrucks] = useState([]);

  const createNewTruck = useCallback(() => {
    const newTruck = {
      id: crypto.randomUUID(),
      indicator: indicator,
      producer: producer,
      type: type,
      weight: weight,
      nextHU: nextHU,
      nextSP: nextSP,
    };
    setTruck(newTruck);
    window.api.createTruck(newTruck);
    resetTruck();
    window.api.sendMessage((_event: Electron.IpcRendererEvent, message) => {
      setResMessage(message);
      setTimeout(() => {
        setResMessage("");
      }, 2000);
    });
  }, [resMessage, truck, indicator, producer, type, weight, nextHU, nextSP]);

  const fetchTrucks = useCallback(() => {
    window.api.fetchTrucks(trucks);
    window.api.sendTrucks((_event: Electron.IpcRendererEvent, trucks) => {
      setTrucks(trucks);
    });
  }, [trucks]);

  const fetchTruck = useCallback(() => {
    const savedTruckId = localStorage.getItem("truckId");
    let currentTruckId: string;
    if (savedTruckId) currentTruckId = savedTruckId;
    else {
      currentTruckId = truckId;
      localStorage.setItem("truckId", currentTruckId);
    }
    window.api.fetchTruck(currentTruckId);
    window.api.sendTruck((_event: Electron.IpcRendererEvent, truck: ITruck) => {
      truck.id = currentTruckId;
      setTruckId(currentTruckId);
      setTruck(truck);
      setIndicator(truck.indicator);
      setProducer(truck.producer);
      setType(truck.type);
      setWeight(truck.weight);
      setNextHU(truck.nextHU);
      setNextSP(truck.nextSP);
    });
  }, [
    truck,
    truckId,
    truck.indicator,
    truck.producer,
    truck.type,
    truck.weight,
    truck.nextHU,
    truck.nextSP,
  ]);

  const editTruck = useCallback(() => {
    const newData = {
      id: truckId,
      indicator: indicator,
      producer: producer,
      type: type,
      weight: weight,
      nextHU: nextHU,
      nextSP: nextSP,
    };
    setTruck(newData);
    window.api.editTruck(newData);
    window.api.sendMessage((_event, message) => {
      setResMessage(message);
      setTimeout(() => {
        setResMessage("");
      }, 2000);
    });
  }, [resMessage, truckId, indicator, producer, type, weight, nextHU, nextSP]);

  const deleteTruck = () => {
    window.api.deleteTruck(truckId);
    if (truckId === "") {
      return;
    }
    navigate("/trucks");
  };

  const resetTruck = () => {
    setIndicator("");
    setProducer("");
    setType("");
    setWeight("");
    setNextHU("");
    setNextSP("");
  };

  const contextValue = useMemo(
    () => ({
      truckId,
      setTruckId,
      truck,
      setTruck,
      indicator,
      setIndicator,
      producer,
      setProducer,
      type,
      setType,
      weight,
      setWeight,
      nextHU,
      setNextHU,
      nextSP,
      setNextSP,
      trucks,
      setTrucks,

      createNewTruck,
      fetchTrucks,
      fetchTruck,
      editTruck,
      deleteTruck,
    }),
    [
      truckId,
      setTruckId,
      truck,
      setTruck,
      indicator,
      setIndicator,
      producer,
      setProducer,
      type,
      setType,
      weight,
      setWeight,
      nextHU,
      setNextHU,
      nextSP,
      setNextSP,
      trucks,
      setTrucks,

      createNewTruck,
      fetchTrucks,
      fetchTruck,
      editTruck,
      deleteTruck,
    ]
  );

  return (
    <TrucksContext.Provider value={contextValue}>
      {props.children}
    </TrucksContext.Provider>
  );
}

export const useTrucksData = () => useContext(TrucksContext) as ITruckContext;
