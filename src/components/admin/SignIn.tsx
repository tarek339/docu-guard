import { FormButton } from "../parents/buttons";
import { Input, Form } from "../parents/forms";
import { AdminFormHolder } from "..";
import { useTranslationsData } from "../../context/TranslationContext";
import { useData } from "../../context/AppContext";

const SignIn = () => {
  const { formiks } = useData();
  const { t } = useTranslationsData();

  return (
    <AdminFormHolder main={t("main.noAccount")} header={t("main.login")}>
      <Form onSubmit={formiks.handleSubmit}>
        <Input
          name="adminName"
          label={t("main.email")}
          value={formiks.values.adminName}
          onChange={formiks.handleChange}
          error={
            Boolean(formiks.errors.adminName) &&
            Boolean(formiks.touched.adminName)
          }
          children={
            formiks.touched.adminName ? <> {formiks.errors.adminName}</> : null
          }
        />

        <Input
          name="password"
          label={t("main.password")}
          value={formiks.values.password}
          onChange={formiks.handleChange}
          error={
            Boolean(formiks.errors.password) &&
            Boolean(formiks.touched.password)
          }
          children={
            formiks.touched.password ? <>{formiks.errors.password} </> : null
          }
        />
        <FormButton children={t("main.continue")} />
      </Form>
    </AdminFormHolder>
  );
};

export default SignIn;
