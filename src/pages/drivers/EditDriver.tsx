import React, { useEffect } from "react";
import { useData } from "../../context/AppContext";

const EditDriver = () => {
  const {
    driverId,
    firstName,
    lastName,
    phoneNumber,
    licenseNumber,
    licenseValidity,
    licenseType,
    typeValidity,
    codeNumValidity,
    driverCardNum,
    driverCardValidity,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setLicenseNumber,
    setLicenseValidity,
    setLicenseType,
    setTypeValidity,
    setCodeNumValidity,
    setDriverCardNum,
    setDriverCardValidity,
    fetchDriver,
    editDriver,
    deleteDriver,
    navigateBack,
    resMessage,
  } = useData();

  useEffect(() => {
    fetchDriver();
  }, [driverId]);

  return (
    <div>
      <h3>driver</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          editDriver();
        }}
      >
        <input
          type="text"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        />
        <input
          type="text"
          value={licenseNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseNumber(e.target.value)
          }
        />
        <input
          type="text"
          value={licenseValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseValidity(e.target.value)
          }
        />
        <input
          type="text"
          value={licenseType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLicenseType(e.target.value)
          }
        />
        <input
          type="text"
          value={typeValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTypeValidity(e.target.value)
          }
        />
        <input
          type="text"
          value={codeNumValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCodeNumValidity(e.target.value)
          }
        />
        <input
          type="text"
          value={driverCardNum}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDriverCardNum(e.target.value)
          }
        />
        <input
          type="text"
          value={driverCardValidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDriverCardValidity(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={deleteDriver}>Delete profile</button>
      <button onClick={navigateBack}>Back</button>
      <div>
        <h3>{resMessage}</h3>
      </div>
    </div>
  );
};

export default EditDriver;
