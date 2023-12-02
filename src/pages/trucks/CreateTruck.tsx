import { useFunctionsData } from "../../context/FunctionsContext";
import { useTrucksData } from "../../context/TrucksContext";

const CreateTruck = () => {
  const { resMessage } = useFunctionsData();
  const {
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
    createNewTruck,
  } = useTrucksData();

  return (
    <div>
      <h3>Create Truck</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createNewTruck();
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
      <h3>{resMessage}</h3>
    </div>
  );
};

export default CreateTruck;
