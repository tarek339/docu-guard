import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useFunctionsData } from "../functions/FunctionsContext";
import { ITrailerContext } from "../../../types/interfaces/trailerContext";
import { ITrailer } from "../../../types/interfaces/properties";

export const TrailersContext = createContext({});

export function TrailersContextProvider(props: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { setResMessage, resMessage } = useFunctionsData();

  const [trailer, setTrailer] = useState({
    id: "",
    indicator: "",
    producer: "",
    type: "",
    weight: "",
    nextHU: "",
    nextSP: "",
  });
  const [trailerId, setTrailerId] = useState("");
  const [indicator, setIndicator] = useState("");
  const [producer, setProducer] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState("");
  const [nextHU, setNextHU] = useState("");
  const [nextSP, setNextSP] = useState("");
  const [trailers, setTrailers] = useState([]);

  const createNewTrailer = useCallback(() => {
    const newTrailer = {
      id: crypto.randomUUID(),
      indicator: indicator,
      producer: producer,
      type: type,
      weight: weight,
      nextHU: nextHU,
      nextSP: nextSP,
    };
    setTrailer(newTrailer);
    window.api.createTrailer(newTrailer);
    resetTrailer();
    window.api.sendMessage((_event: Electron.IpcRendererEvent, message) => {
      setResMessage(message);
      setTimeout(() => {
        setResMessage("");
      }, 2000);
    });
  }, [resMessage, trailer, indicator, producer, type, weight, nextHU, nextSP]);

  const fetchTrailers = useCallback(() => {
    window.api.fetchTrailers(trailers);
    window.api.sendTrailers((_event: Electron.IpcRendererEvent, trailers) => {
      setTrailers(trailers);
    });
  }, [trailers]);

  const fetchTrailer = useCallback(() => {
    const savedTrailerId = localStorage.getItem("trailerId");
    let currentTrailerId: string;
    if (savedTrailerId) currentTrailerId = savedTrailerId;
    else {
      currentTrailerId = trailerId;
      localStorage.setItem("trailerId", currentTrailerId);
    }
    window.api.fetchTrailer(currentTrailerId);
    window.api.sendTrailer(
      (_event: Electron.IpcRendererEvent, trailer: ITrailer) => {
        trailer.id = currentTrailerId;
        setTrailerId(currentTrailerId);
        setTrailer(trailer);
        setIndicator(trailer.indicator);
        setProducer(trailer.producer);
        setType(trailer.type);
        setWeight(trailer.weight);
        setNextHU(trailer.nextHU);
        setNextSP(trailer.nextSP);
      }
    );
  }, [
    trailer,
    trailerId,
    trailer.indicator,
    trailer.producer,
    trailer.type,
    trailer.weight,
    trailer.nextHU,
    trailer.nextSP,
  ]);

  const editTrailer = useCallback(() => {
    const newData = {
      id: trailerId,
      indicator: indicator,
      producer: producer,
      type: type,
      weight: weight,
      nextHU: nextHU,
      nextSP: nextSP,
    };
    setTrailer(newData);
    window.api.editTrailer(newData);
    window.api.sendMessage((_event, message) => {
      setResMessage(message);
      setTimeout(() => {
        setResMessage("");
      }, 2000);
    });
  }, [
    resMessage,
    trailerId,
    indicator,
    producer,
    type,
    weight,
    nextHU,
    nextSP,
  ]);

  const deleteTrailer = () => {
    window.api.deleteTrailer(trailerId);
    if (trailerId === "") {
      return;
    }
    navigate("/trailers");
  };

  const resetTrailer = () => {
    setIndicator("");
    setProducer("");
    setType("");
    setWeight("");
    setNextHU("");
    setNextSP("");
  };

  const contextValue = useMemo(
    () => ({
      trailerId,
      setTrailerId,
      trailer,
      setTrailer,
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
      trailers,
      setTrailers,

      createNewTrailer,
      fetchTrailers,
      fetchTrailer,
      editTrailer,
      deleteTrailer,
    }),
    [
      trailerId,
      setTrailerId,
      trailer,
      setTrailer,
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
      trailers,
      setTrailers,

      createNewTrailer,
      fetchTrailers,
      fetchTrailer,
      editTrailer,
      deleteTrailer,
    ]
  );

  return (
    <TrailersContext.Provider value={contextValue}>
      {props.children}
    </TrailersContext.Provider>
  );
}

export const useTrailersData = () =>
  useContext(TrailersContext) as ITrailerContext;
