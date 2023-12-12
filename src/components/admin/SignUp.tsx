import { FormButton } from "../parents/buttons";
import { Input, Form } from "../parents/forms";
import { AdminFormHolder } from "..";
import { useData } from "../../context/AppContext";
import { useTranslationsData } from "../../context/TranslationContext";

const SignUp = () => {
  const { t } = useTranslationsData();
  const { adminFormik } = useData();

  return (
    <AdminFormHolder header={t("main.register")} main={t("main.haveAccount")}>
      <Form onSubmit={adminFormik.handleSubmit}>
        <Input
          name="companyName"
          label={t("main.compName")}
          value={adminFormik.values.companyName}
          onChange={adminFormik.handleChange}
          error={
            Boolean(adminFormik.errors.companyName) &&
            Boolean(adminFormik.touched.companyName)
          }
          children={
            adminFormik.touched.companyName ? (
              <> {adminFormik.errors.companyName}</>
            ) : null
          }
        />
        <Input
          name="adminName"
          label={t("main.adminName")}
          value={adminFormik.values.adminName}
          onChange={adminFormik.handleChange}
          error={
            Boolean(adminFormik.errors.adminName) &&
            Boolean(adminFormik.touched.adminName)
          }
          children={
            adminFormik.touched.adminName ? (
              <> {adminFormik.errors.adminName}</>
            ) : null
          }
        />
        <Input
          name="email"
          label={t("main.email")}
          value={adminFormik.values.email}
          onChange={adminFormik.handleChange}
          error={
            Boolean(adminFormik.errors.email) &&
            Boolean(adminFormik.touched.email)
          }
          children={
            adminFormik.touched.email ? <> {adminFormik.errors.email}</> : null
          }
        />
        <Input
          name="password"
          label={t("main.password")}
          value={adminFormik.values.password}
          onChange={adminFormik.handleChange}
          error={
            Boolean(adminFormik.errors.password) &&
            Boolean(adminFormik.touched.password)
          }
          children={
            adminFormik.touched.password ? (
              <>{adminFormik.errors.password} </>
            ) : null
          }
        />
        <Input
          name="confirmPassword"
          label={t("main.confirmPassword")}
          value={adminFormik.values.confirmPassword}
          onChange={adminFormik.handleChange}
          error={
            Boolean(adminFormik.errors.confirmPassword) &&
            Boolean(adminFormik.touched.confirmPassword)
          }
          children={
            adminFormik.touched.confirmPassword ? (
              <>{adminFormik.errors.confirmPassword} </>
            ) : null
          }
        />
        <FormButton children={t("main.register")} />
      </Form>
    </AdminFormHolder>
  );
};

export default SignUp;
