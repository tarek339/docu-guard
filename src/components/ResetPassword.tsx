import { useFormik } from "formik";
import * as Yup from "yup";
import { useAdminData } from "../context/AdminContext";
import { useCallback } from "react";
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
  email: Yup.string().required("Your email is required"),
});

const ResetPassword = () => {
  const { email } = useAdminData();
  const sendRequest = useCallback(() => {}, [email]);
  const { page, setPage } = useFunctionsData();
  const { t } = useTranslationsData();

  const formik = useFormik({
    initialValues: {
      email: email,
    },
    validationSchema,

    onSubmit: (_values) => {
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
        <TextHeader>{t("main.reset")} </TextHeader>
        <Block style={{ display: "flex", flexDirection: "row" }}>
          <TextSmall>{t("main.backTo")}&nbsp;</TextSmall>
          <TextButton onClick={() => setPage(page - 2)} children="Login" />
        </Block>
        <Block style={{ paddingTop: "10px" }}>
          <Form onSubmit={formik.handleSubmit}>
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
            <FormButton children={t("main.resetPassword")} />
          </Form>
        </Block>
      </motion.div>
    </>
  );
};

export default ResetPassword;
