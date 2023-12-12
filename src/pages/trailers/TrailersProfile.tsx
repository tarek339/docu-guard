import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTrailersData } from "../../context/TrailerContext";
import { useData } from "../../context/AppContext";

const TrailersProfile = () => {
  const { trailer, trailerId, fetchTrailer } = useTrailersData();
  const { navigateBack } = useData();
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
