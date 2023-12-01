import { useNavigate } from "react-router-dom";
import { useAdminData } from "../hooks/context/AdminContext";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  companyName: Yup.string().required("Admin name is required"),
  adminName: Yup.string().required("Admin name is required"),
  email: Yup.string().required("Admin name is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { page, setPage } = useFunctionsData();
  const {
    createAdmin,
    companyName,
    adminName,
    email,
    password,
    confirmPassword,
  } = useAdminData();

  const formik = useFormik({
    initialValues: {
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    },
    validationSchema,

    onSubmit: (values) => {},
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
          Register
        </Text>
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: colors.text.grey, fontSize: "14px" }}>
            Allready have an account? &nbsp;
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
              name="companyName"
              label={"Company"}
              value={formik.values.companyName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.companyName) &&
                Boolean(formik.touched.companyName)
              }
              children={
                formik.touched.companyName ? (
                  <> {formik.errors.companyName}</>
                ) : null
              }
            />
            <Input
              name="adminName"
              label={"Admin name"}
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
            <Input
              name="confirmPassword"
              label={"Confirm password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.confirmPassword) &&
                Boolean(formik.touched.confirmPassword)
              }
              children={
                formik.touched.confirmPassword ? (
                  <>{formik.errors.confirmPassword} </>
                ) : null
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
              Register
            </ButtonContained>
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default SignUp;
