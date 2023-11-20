import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../hooks/context/AppContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { resMessage, setResMessage } = useData();

  const sendRequest = useCallback(() => {
    window.api.signIn(email, password);
    window.api.sendMessage(
      (_event: Electron.IpcRendererEvent, message: string) => {
        if (message === "verified") {
          navigate("/drivers");
        } else setResMessage(message);
        setTimeout(() => {
          setResMessage("");
        }, 2000);
        console.log(message);
      }
    );
    setEmail("");
    setPassword("");
  }, [email, password]);

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
        <button type="submit">Submit</button>
      </form>
      <h3>{resMessage}</h3>
      <button onClick={() => navigate("/")}>Sign up</button>
    </div>
  );
};

export default SignIn;
