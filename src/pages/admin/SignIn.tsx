import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminData } from "../../hooks/context/admin/AdminContext";
import { useFunctionsData } from "../../hooks/context/functions/FunctionsContext";
import Block from "../../components/Block";
import Form from "../../components/Form";
import Text from "../../components/Text";
import Input from "../../components/Input";
import ButtonContained from "../../components/ButtonContained";
import colors from "../../assets/theme/colors";
import { Link } from "@mui/material";

const SignIn = () => {
  const navigate = useNavigate();
  const { adminName, setAdminName, password, setPassword } = useAdminData();
  const { resMessage, setResMessage } = useFunctionsData();

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
    setAdminName("");
    setPassword("");
  }, [adminName, password]);

  return (
    <Block
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Block
        style={{
          backgroundColor: "#FFF",
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Block
          style={{
            width: "550px",
            padding: "40px 24px 50px 24px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
          }}
        >
          <Text
            style={{
              color: colors.text.black,
              fontWeight: 600,
              fontSize: "32px",
            }}
          >
            Login
          </Text>

          <Text style={{ color: colors.text.grey, fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link
              href="#"
              underline="hover"
              style={{ color: colors.text.purple }}
            >
              Register
            </Link>
          </Text>

          <Block style={{ paddingTop: "35px" }}>
            <Form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                sendRequest();
              }}
            >
              <Input
                value={adminName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAdminName(e.target.value)
                }
                labelChildren={"E-Mail"}
              />
              <Input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                labelChildren={"Password"}
              />

              <ButtonContained
                variant={"contained"}
                backgroundColor={colors.button.contained}
                color={colors.text.white}
                style={{
                  padding: "11px 24px",
                  borderRadius: "12px",
                  marginTop: "10px",
                  width: "100%",
                  height: "53px",
                }}
              >
                Continue
              </ButtonContained>
            </Form>
          </Block>
          <Block style={{ marginTop: "20px" }}>
            <Text
              style={{
                color: colors.text.grey,
                fontSize: "14px",
                textAlign: "right",
                paddingRight: "10px",
              }}
            >
              Forgot your password?{" "}
              <Link
                href="#"
                underline="hover"
                style={{ color: colors.text.purple }}
              >
                Reset
              </Link>
            </Text>
          </Block>
        </Block>
      </Block>
      <Block
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
          width: "50%",
          height: "100%",
        }}
      />
    </Block>
  );
};

export default SignIn;
