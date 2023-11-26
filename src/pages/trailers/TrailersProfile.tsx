import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFunctionsData } from "../../hooks/context/functions/FunctionsContext";
import { useTrailersData } from "../../hooks/context/trailers/TrailerContext";

const TrailersProfile = () => {
  const { trailer, trailerId, fetchTrailer } = useTrailersData();
  const { navigateBack } = useFunctionsData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrailer();
  }, [trailerId]);

  return (
    <div>
      <h3>TrailerProfile</h3>
      <h3>{trailer.indicator}</h3>
      <h3>{trailer.producer}</h3>
      <button onClick={navigateBack}>back</button>
      <button onClick={() => navigate(`/edit-trailer/${trailerId}`)}>
        edit
      </button>
    </div>
  );
};

export default TrailersProfile;
