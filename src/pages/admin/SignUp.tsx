import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/context/AppContext";
import { IAdmin } from "../../types/interfaces/components";

const SignUp = () => {
  const [admin, setAdmin] = useState<IAdmin>({
    companyName: "",
    adminName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { resMessage, setResMessage } = useData();

  const reset = () => {
    setAdmin({
      companyName: "",
      adminName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const createAdmin = useCallback(() => {
    setAdmin({
      ...admin,
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  }, [admin, companyName, email, password, confirmPassword]);

  useEffect(() => {
    if (Object.values(admin).some((value) => value !== "")) {
      window.api.signUp(admin);
      reset();
      navigate("/create-driver");
      window.api.sendMessage((_event, message) => {
        setResMessage(message);
        setTimeout(() => {
          setResMessage("");
        }, 2000);
      });
    }
  }, [admin]);
  return (
    <div>
      <h3>Admin</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          createAdmin();
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
          value={adminName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAdminName(e.target.value)
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
