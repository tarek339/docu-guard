import { useNavigate } from "react-router-dom";
import { useAdminData } from "../context/AdminContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Block from "./parents/container/Block";
import Form from "./parents/forms/Form";
import Input from "./parents/forms/Input";
import FormButton from "./parents/buttons/FormButton";
import { motion } from "framer-motion";
import { useFunctionsData } from "../context/FunctionsContext";
import TextHeader from "./parents/text/TextHeader";
import TextSmall from "./parents/text/TextSmall";
import TextButton from "./parents/buttons/TextButton";
import { useTranslationsData } from "../context/TranslationContext";

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
  const { t } = useTranslationsData();
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

    onSubmit: (_values) => {},
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TextHeader>{t("main.register")}</TextHeader>
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <TextSmall>{t("main.haveAccount")} &nbsp;</TextSmall>
          <TextButton
            onClick={() => (page == 0 ? setPage(page + 1) : setPage(page - 1))}
            children={page == 0 ? t("main.register") : t("main.login")}
          />
        </Block>
        <Block style={{ paddingTop: "10px" }}>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              name="companyName"
              label={t("main.compName")}
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
              label={t("main.adminName")}
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
              label={t("main.email")}
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
              label={t("main.password")}
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
              label={t("main.confirmPassword")}
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
            <FormButton children={t("main.register")} />
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default SignUp;
