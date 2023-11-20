import { useCallback, useEffect, useState } from "react";
import { ICompany } from "../types/interfaces/components";
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks/context/AppContext";

const SignUp = () => {
  const [company, setCompany] = useState<ICompany>({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { resMessage, setResMessage } = useData();

  const reset = () => {
    setCompany({
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const createCompany = useCallback(() => {
    setCompany({
      ...company,
      companyName: companyName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  }, [company, companyName, email, password, confirmPassword]);

  useEffect(() => {
    if (Object.values(company).some((value) => value !== "")) {
      window.api.signUp(company);
      reset();
      // navigate("/create-driver");
      window.api.sendMessage((event, message) => {
        setResMessage(message);
        setTimeout(() => {
          setResMessage("");
        }, 2000);
      });
    }
  }, [company]);
  return (
    <div>
      <h3>Company</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createCompany();
        }}
      >
        <input
          required
          type="text"
          value={companyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <input
          required
          type="text"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{resMessage} </h3>
      <button onClick={() => navigate("/sign-in")}>sign in</button>
    </div>
  );
};

export default SignUp;
