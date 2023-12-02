import { useNavigate } from "react-router-dom";
import { useDriversData, useFunctionsData } from "../../context";

const Create = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    licenseNumber,
    setLicenseNumber,
    licenseValidity,
    setLicenseValidity,
    licenseType,
    setLicenseType,
    typeValidity,
    setTypeValidity,
    codeNumValidity,
    setCodeNumValidity,
    driverCardNum,
    setDriverCardNum,
    driverCardValidity,
    setDriverCardValidity,
    createNewDriver,
  } = useDriversData();
  const { resMessage } = useFunctionsData();
  const navigate = useNavigate();

  return (
    <div>
      <h3>driver</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createNewDriver();
        }}
      >
        <input
          required
          type="text"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={licenseNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseNumber(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={licenseValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseValidity(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={licenseType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseType(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={typeValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypeValidity(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={codeNumValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCodeNumValidity(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={driverCardNum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDriverCardNum(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={driverCardValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDriverCardValidity(e.target.value)
          }
        />
        <button type="submit">submit</button>
      </form>

      <button onClick={() => navigate("/")}>sign up</button>
      <button
        onClick={() => {
          navigate("/drivers");
        }}
      >
        drivers
      </button>
      <div>
        <h3>{resMessage}</h3>
      </div>
    </div>
  );
};

export default Create;
