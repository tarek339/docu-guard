import { useAdminData } from "../../hooks/context/AdminContext";

const Profile = () => {
  const {
    admin,
    adminName,
    companyName,
    email,
    password,
    confirmPassword,
    setCompanyName,
    setAdminName,
    setEmail,
    setPassword,
    setConfirmPassword,
    editAmin,
    message,
  } = useAdminData();

  return (
    <div>
      <h3>Profile</h3>
      <h3>{admin.companyName}</h3>
      <h3>{admin.adminName}</h3>
      <h3>{admin.email}</h3>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          editAmin();
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
      <div>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default Profile;
