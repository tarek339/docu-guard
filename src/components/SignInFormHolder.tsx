import Block from "./Block";
import Text from "./Text";
import colors from "../assets/theme/colors";
import { Link } from "@mui/material";
import { useFunctionsData } from "../hooks/context/FunctionsContext";
import Pagination from "./Pagination";

const SignInFormHolder = () => {
  const { page, setPage } = useFunctionsData();
  return (
    <Block
      style={{
        width: "550px",
        padding: "40px 24px 50px 24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Pagination />

      {page === 0 ? (
        <Block
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: "15px",
          }}
        >
          <Text
            style={{
              color: colors.text.grey,
              fontSize: "14px",
            }}
          >
            Forgot your password? &nbsp;
          </Text>
          <Link
            href="#"
            underline="hover"
            style={{ color: colors.text.purple }}
          >
            <Text
              style={{ fontSize: "14px" }}
              onClick={() => setPage(page + 2)}
            >
              Reset
            </Text>
          </Link>
        </Block>
      ) : null}
    </Block>
  );
};

export default SignInFormHolder;
