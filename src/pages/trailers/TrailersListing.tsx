import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ITrailer } from "../../types/interfaces";
import { useData } from "../../context/AppContext";

const TrailersListing = () => {
  const { setTrailerId, trailers } = useData();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchTrailers();
  //   localStorage.removeItem("trailerId");
  // }, []);

  return (
    <div>
      <h3>Trailers</h3>
      {trailers.map((trailer: ITrailer, _index: number) => {
        return (
          <div key={trailer.id}>
            <h3>{trailer.indicator}</h3>
            <h3>{trailer.producer}</h3>
            <button
              onClick={() => {
                setTrailerId(trailer.id);
                navigate(`/trailer-profile/${trailer.id}`);
              }}
            >
              profile
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TrailersListing;
