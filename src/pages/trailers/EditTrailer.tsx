import React, { useEffect } from "react";
import { useTrailersData } from "../../context/TrailerContext";
import { useData } from "../../context/AppContext";

const EditTrailer = () => {
  const {
    trailerId,
    indicator,
    producer,
    type,
    weight,
    nextHU,
    nextSP,
    setIndicator,
    setProducer,
    setType,
    setWeight,
    setNextHU,
    setNextSP,
    fetchTrailer,
    editTrailer,
    deleteTrailer,
  } = useTrailersData();
  const { navigateBack, resMessage } = useData();

  useEffect(() => {
    fetchTrailer();
  }, [trailerId]);

  return (
    <div>
      <h3>Edit Trailer</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          editTrailer();
        }}
      >
        <input
          required
          type="text"
          value={indicator}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIndicator(e.target.value);
          }}
        />
        <input
          required
          type="text"
          value={producer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProducer(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setType(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={weight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWeight(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={nextHU}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNextHU(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={nextSP}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNextSP(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={deleteTrailer}>Delete profile</button>
      <button onClick={navigateBack}>Back</button>
      <div>
        <h3>{resMessage}</h3>
      </div>
    </div>
  );
};

export default EditTrailer;
