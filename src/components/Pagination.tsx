import { ResetPassword, SignIn, SignUp } from ".";
import { useFunctionsData } from "../context/FunctionsContext";

const Pagination = () => {
  const { page } = useFunctionsData();

  return (
    <>{page === 0 ? <SignIn /> : page === 1 ? <SignUp /> : <ResetPassword />}</>
  );
};

export default Pagination;
