import { ITrailer } from "../properties";

export interface ITrailerContext {
  trailerId: string;
  setTrailerId: React.Dispatch<React.SetStateAction<string>>;
  trailer: ITrailer;
  setTrailer: React.Dispatch<React.SetStateAction<ITrailer>>;
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
  trailers: ITrailer[];
  setTrailers: React.Dispatch<React.SetStateAction<ITrailer[]>>;

  createNewTrailer: () => void;
  fetchTrailers: () => void;
  fetchTrailer: () => void;
  editTrailer: () => void;
  deleteTrailer: () => void;
}
