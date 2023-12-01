import { useFormik } from "formik";
import * as Yup from "yup";
import { useAdminData } from "../hooks/context/AdminContext";
import { useCallback } from "react";
import Block from "./Block";
import Form from "./Form";
import Input from "./Input";
import colors from "../assets/theme/colors";
import ButtonContained from "./ButtonContained";
import { motion } from "framer-motion";
import Text from "./Text";
import { Link } from "@mui/material";
import { useFunctionsData } from "../hooks/context/FunctionsContext";
import { IValues } from "../types/interfaces/properties";

const validationSchema = Yup.object({
  adminName: Yup.string().required("Admin name is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const { adminName, password } = useAdminData();
  const { setResMessage } = useFunctionsData();

  const { page, setPage } = useFunctionsData();

  const formik = useFormik({
    initialValues: {
      adminName: adminName,
      password: password,
    },
    validationSchema,

    onSubmit: (values: IValues) => {
      window.api.signIn(values);
      window.api.sendMessage(
        (_event: Electron.IpcRendererEvent, message: string) => {
          setResMessage(message);
          setTimeout(() => {
            setResMessage("");
          }, 2000);
        }
      );
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
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
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: colors.text.grey, fontSize: "14px" }}>
            Don't have an account? &nbsp;
          </Text>
          <Link
            href="#"
            underline="hover"
            style={{ color: colors.text.purple }}
          >
            <Text
              onClick={() => {
                page === 0 ? setPage(page + 1) : setPage(page - 1);
              }}
              style={{ fontSize: "14px" }}
            >
              {page === 0 ? "Register" : "Login"}
            </Text>
          </Link>
        </Block>
        <Block style={{ paddingTop: "10px" }}>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              name="adminName"
              label={"E-Mail"}
              value={formik.values.adminName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.adminName) &&
                Boolean(formik.touched.adminName)
              }
              children={
                formik.touched.adminName ? (
                  <> {formik.errors.adminName}</>
                ) : null
              }
            />

            <Input
              name="password"
              label={"Password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.password) &&
                Boolean(formik.touched.password)
              }
              children={
                formik.touched.password ? <>{formik.errors.password} </> : null
              }
            />
            <ButtonContained
              type="submit"
              variant={"contained"}
              backgroundColor={colors.button.contained}
              color={colors.text.white}
              style={{
                padding: "11px 24px",
                borderRadius: "12px",
                marginTop: "18px",
                width: "100%",
                height: "48px",
                border: `1px solid ${colors.text.purple}`,
              }}
            >
              Continue
            </ButtonContained>
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default SignIn;
