import { useAdminData } from "../context/AdminContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormButton } from "./parents/buttons";
import { Input, Form } from "./parents/forms";
import { useFunctionsData, useTranslationsData } from "../context";
import { AdminFormHolder } from ".";

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
  const { page, setPage, setOpenAlert } = useFunctionsData();
  const { t } = useTranslationsData();
  const {
    companyName,
    adminName,
    email,
    password,
    confirmPassword,
    setAdmin,
    setMessage,
  } = useAdminData();

  const formik = useFormik({
    initialValues: {
      id: crypto.randomUUID(),
      companyName: companyName,
      adminName: adminName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    },
    validationSchema,

    onSubmit: (values) => {
      setAdmin(values);
      window.api.signUp(values);
      window.api.sendMessage((_event, message: string) => {
        setMessage(message);
        setOpenAlert(true);
        setPage(page - 1);
      });
    },
  });

  return (
    <AdminFormHolder header={t("main.register")} main={t("main.haveAccount")}>
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
            formik.touched.adminName ? <> {formik.errors.adminName}</> : null
          }
        />
        <Input
          name="email"
          label={t("main.email")}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
          children={formik.touched.email ? <> {formik.errors.email}</> : null}
        />
        <Input
          name="password"
          label={t("main.password")}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            Boolean(formik.errors.password) && Boolean(formik.touched.password)
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
    </AdminFormHolder>
  );
};

export default SignUp;
