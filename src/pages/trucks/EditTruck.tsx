import React, { useEffect } from "react";
import { useFunctionsData } from "../../hooks/context/functions/FunctionsContext";
import { useTrucksData } from "../../hooks/context/trucks/TrucksContext";

const EditTruck = () => {
  const {
    truckId,
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
    fetchTruck,
    editTruck,
    deleteTruck,
  } = useTrucksData();
  const { navigateBack, resMessage } = useFunctionsData();

  useEffect(() => {
    fetchTruck();
  }, [truckId]);

  return (
    <div>
      <h3>Edit Truck</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          editTruck();
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
      <button onClick={deleteTruck}>Delete profile</button>
      <button onClick={navigateBack}>Back</button>
      <div>
        <h3>{resMessage}</h3>
      </div>
    </div>
  );
};

export default EditTruck;
