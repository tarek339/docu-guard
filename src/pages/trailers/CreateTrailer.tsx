import { useData } from "../../context/AppContext";
import { useTrailersData } from "../../unused/TrailerContext";

const CreateTrailer = () => {
  const { resMessage } = useData();
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
    createNewTrailer,
  } = useTrailersData();

  return (
    <div>
      <h3>Create Trailer</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createNewTrailer();
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

export default CreateTrailer;
