import { ResetPassword, SignIn, SignUp } from "..";
import { useData } from "../../context/AppContext";

const Pagination = () => {
  const { page } = useData();

  return (
    <>{page === 0 ? <SignIn /> : page === 1 ? <SignUp /> : <ResetPassword />}</>
  );
};

export default Pagination;
