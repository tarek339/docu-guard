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

const validationSchema = Yup.object({
  email: Yup.string().required("Your email is required"),
});

const ResetPassword = () => {
  const { email } = useAdminData();
  const sendRequest = useCallback(() => {}, [email]);
  const { page, setPage } = useFunctionsData();

  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema,

    onSubmit: (values) => {
      sendRequest();
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
          Reset
        </Text>
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: colors.text.grey, fontSize: "14px" }}>
            Back to&nbsp;
          </Text>
          <Link
            href="#"
            underline="hover"
            style={{ color: colors.text.purple }}
          >
            <Text
              onClick={() => setPage(page - 2)}
              style={{ fontSize: "14px" }}
            >
              Login
            </Text>
          </Link>
        </Block>
        <Block style={{ paddingTop: "10px" }}>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              label={"E-Mail"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.email) && Boolean(formik.touched.email)
              }
              children={
                formik.touched.email ? <> {formik.errors.email}</> : null
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
              Reset password
            </ButtonContained>
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default ResetPassword;
