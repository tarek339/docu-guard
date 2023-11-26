import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTrailersData } from "../../hooks/context/trailers/TrailerContext";

const TrailersListing = () => {
  const { setTrailerId, fetchTrailers, trailers } = useTrailersData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrailers();
    // localStorage.removeItem("driverId");
  }, []);

  return (
    <div>
      <h3>Trailers</h3>
      {trailers.map((trailer, _index) => {
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
