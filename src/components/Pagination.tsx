import { useFunctionsData } from "../context/FunctionsContext";
import ResetPassword from "./ResetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Pagination = () => {
  const { page } = useFunctionsData();

  return (
    <>{page === 0 ? <SignIn /> : page === 1 ? <SignUp /> : <ResetPassword />}</>
  );
};

export default Pagination;
