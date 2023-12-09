import { useNavigate } from "react-router-dom";
import { useDriversData, useTranslationsData } from "../../context";
import { AddFormHolder, Form, Input } from "../../components/parents/forms";
import { GridNoSpace } from "../../components/parents/container";
import { BasicButton, FormButton } from "../../components/parents/buttons";
import { Grid } from "@mui/material";

const AddNewDriver = () => {
  const { formik } = useDriversData();
  const navigate = useNavigate();
  const { t } = useTranslationsData();

  return (
    <AddFormHolder header={t("main.addDriver")}>
      <Form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="firstName"
              label={t("driver.firstName")}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.firstName) &&
                Boolean(formik.touched.firstName)
              }
              children={
                formik.touched.firstName ? (
                  <> {formik.errors.firstName}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="lastName"
              label={t("driver.lastName")}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.lastName) &&
                Boolean(formik.touched.lastName)
              }
              children={
                formik.touched.lastName ? <> {formik.errors.lastName}</> : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="phoneNumber"
              label={t("driver.phoneNumber")}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.phoneNumber) &&
                Boolean(formik.touched.phoneNumber)
              }
              children={
                formik.touched.phoneNumber ? (
                  <> {formik.errors.phoneNumber}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="licenseNumber"
              label={t("driver.licenseNumber")}
              value={formik.values.licenseNumber}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.licenseNumber) &&
                Boolean(formik.touched.licenseNumber)
              }
              children={
                formik.touched.licenseNumber ? (
                  <> {formik.errors.licenseNumber}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="licenseValidity"
              label={t("driver.validity")}
              value={formik.values.licenseValidity}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.licenseValidity) &&
                Boolean(formik.touched.licenseValidity)
              }
              children={
                formik.touched.licenseValidity ? (
                  <> {formik.errors.licenseValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="licenseType"
              label={t("driver.licenseType")}
              value={formik.values.licenseType}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.licenseType) &&
                Boolean(formik.touched.licenseType)
              }
              children={
                formik.touched.licenseType ? (
                  <> {formik.errors.licenseType}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="typeValidity"
              label={t("driver.validity")}
              value={formik.values.typeValidity}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.typeValidity) &&
                Boolean(formik.touched.typeValidity)
              }
              children={
                formik.touched.typeValidity ? (
                  <> {formik.errors.typeValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="codeNum"
              label={t("driver.codeNum")}
              value={formik.values.codeNum}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.codeNum) &&
                Boolean(formik.touched.codeNum)
              }
              children={
                formik.touched.codeNum ? <> {formik.errors.codeNum}</> : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="codeNumValidity"
              label={t("driver.validity")}
              value={formik.values.codeNumValidity}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.codeNumValidity) &&
                Boolean(formik.touched.codeNumValidity)
              }
              children={
                formik.touched.codeNumValidity ? (
                  <> {formik.errors.codeNumValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="driverCardNum"
              label={t("driver.driverCardNum")}
              value={formik.values.driverCardNum}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.driverCardNum) &&
                Boolean(formik.touched.driverCardNum)
              }
              children={
                formik.touched.driverCardNum ? (
                  <> {formik.errors.driverCardNum}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="driverCardValidity"
              label={t("driver.validity")}
              value={formik.values.driverCardValidity}
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.driverCardValidity) &&
                Boolean(formik.touched.driverCardValidity)
              }
              children={
                formik.touched.driverCardValidity ? (
                  <> {formik.errors.driverCardValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <GridNoSpace style={{ width: "30%", columnGap: 25 }}>
          <FormButton children={t("main.register")} />
          <BasicButton
            children={t("main.cancel")}
            onClick={() => navigate("/drivers")}
          />
        </GridNoSpace>
      </Form>
    </AddFormHolder>
  );
};

export default AddNewDriver;
