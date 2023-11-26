import { useNavigate } from "react-router-dom";
import { useAdminData } from "../../hooks/context/admin/AdminContext";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    createAdmin,
    companyName,
    setCompanyName,
    adminName,
    setAdminName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useAdminData();

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
      <button onClick={() => navigate("/sign-in")}>sign in</button>
    </div>
  );
};

export default SignUp;
