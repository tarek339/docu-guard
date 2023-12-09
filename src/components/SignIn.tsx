import { useFormik } from "formik";
import * as Yup from "yup";
import { useAdminData } from "../context/AdminContext";
import { IValues } from "../types/interfaces/properties";
import { FormButton } from "./parents/buttons";
import { Input, Form } from "./parents/forms";
import { useTranslationsData, useFunctionsData } from "../context";
import { AdminFormHolder } from ".";

const validationSchema = Yup.object({
  adminName: Yup.string().required("Admin name is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const { adminName, password, setMessage } = useAdminData();
  const { t } = useTranslationsData();
  const { setOpenAlert } = useFunctionsData();

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
          setMessage(message);
          setOpenAlert(true);
        }
      );
    },
  });

  return (
    <AdminFormHolder main={t("main.noAccount")} header={t("main.login")}>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          name="adminName"
          label={t("main.email")}
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
        <FormButton children={t("main.continue")} />
      </Form>
    </AdminFormHolder>
  );
};

export default SignIn;
