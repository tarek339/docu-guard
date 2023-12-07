import { useFormik } from "formik";
import * as Yup from "yup";
import { useAdminData } from "../context/AdminContext";
import { motion } from "framer-motion";
import { IValues } from "../types/interfaces/properties";
import Alerts from "./parents/Alerts";
import { TextButton, FormButton } from "./parents/buttons";
import { Block } from "./parents/container";
import { TextHeader, TextSmall } from "./parents/text";
import { Input, Form } from "./parents/forms";
import { useTranslationsData, useFunctionsData } from "../context";

const validationSchema = Yup.object({
  adminName: Yup.string().required("Admin name is required"),
  password: Yup.string().required("Password is required"),
});

const SignIn = () => {
  const { adminName, password, message, setMessage } = useAdminData();
  const { t } = useTranslationsData();

  const { page, setPage, setOpenAlert } = useFunctionsData();

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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Alerts
          severity={message === "Sign up succeed" ? "success" : "error"}
          message={message}
        />
        <TextHeader>{t("main.login")}</TextHeader>
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <TextSmall> {t("main.noAccount")} &nbsp;</TextSmall>
          <TextButton
            onClick={() => (page == 0 ? setPage(page + 1) : setPage(page - 1))}
            children={page == 0 ? t("main.register") : t("main.login")}
          />
        </Block>
        <Block style={{ paddingTop: "10px" }}>
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
                formik.touched.adminName ? (
                  <> {formik.errors.adminName}</>
                ) : null
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
            <FormButton children={t("main.continue")} />
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default SignIn;
