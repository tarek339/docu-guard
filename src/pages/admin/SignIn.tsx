import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../hooks/context/AppContext";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    resMessage,
    setResMessage,
    adminName,
    setAdminName,
    password,
    setPassword,
  } = useData();

  const sendRequest = useCallback(() => {
    window.api.signIn(adminName, password);
    window.api.sendMessage(
      (_event: Electron.IpcRendererEvent, message: string) => {
        setResMessage(message);
        setTimeout(() => {
          setResMessage("");
        }, 2000);
      }
    );
  }, [adminName, password]);

  return (
    <div>
      <h3>Sign In</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          sendRequest();
        }}
      >
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
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{resMessage}</h3>
      <button onClick={() => navigate("/")}>Sign up</button>
    </div>
  );
};

export default SignIn;
