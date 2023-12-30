import { useNavigate } from "react-router-dom"
import {
  AddFormHolder,
  DropDownMenu,
  Form,
  Input
} from "../../components/parents/forms"
import { GridNoSpace } from "../../components/parents/container"
import {
  BasicButton,
  FormButton,
  InputFileUpload
} from "../../components/parents/buttons"
import { Grid, MenuItem } from "@mui/material"
import DateSelecter from "../../components/parents/forms/DateSelecter"
import dayjs from "dayjs"
import { answers, licenseTypes } from "../../components"
import { useData } from "../../context/AppContext"
import { useTranslationsData } from "../../context/TranslationContext"

const AddNewDriver = () => {
  const navigate = useNavigate()
  const { driverFormik, setLocatedFile } = useData()
  const { t } = useTranslationsData()

  return (
    <AddFormHolder header={t("main.addDriver")}>
      <Form onSubmit={driverFormik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Input
              name="firstName"
              label={t("driver.firstName")}
              value={driverFormik.values.firstName}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.firstName) &&
                Boolean(driverFormik.touched.firstName)
              }
              children={
                driverFormik.touched.firstName ? (
                  <> {driverFormik.errors.firstName}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="lastName"
              label={t("driver.lastName")}
              value={driverFormik.values.lastName}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.lastName) &&
                Boolean(driverFormik.touched.lastName)
              }
              children={
                driverFormik.touched.lastName ? (
                  <> {driverFormik.errors.lastName}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="phoneNumber"
              label={t("driver.phoneNumber")}
              value={driverFormik.values.phoneNumber}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.phoneNumber) &&
                Boolean(driverFormik.touched.phoneNumber)
              }
              children={
                driverFormik.touched.phoneNumber ? (
                  <> {driverFormik.errors.phoneNumber}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Input
              name="street"
              label={t("driver.street")}
              value={driverFormik.values.street}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.street) &&
                Boolean(driverFormik.touched.street)
              }
              children={
                driverFormik.touched.street ? (
                  <> {driverFormik.errors.street}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs={2}>
            <Input
              name="houseNum"
              label={t("driver.houseNum")}
              value={driverFormik.values.houseNum}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.houseNum) &&
                Boolean(driverFormik.touched.houseNum)
              }
              children={
                driverFormik.touched.houseNum ? (
                  <> {driverFormik.errors.houseNum}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="zipCode"
              label={t("driver.zipCode")}
              value={driverFormik.values.zipCode}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.zipCode) &&
                Boolean(driverFormik.touched.zipCode)
              }
              children={
                driverFormik.touched.zipCode ? (
                  <> {driverFormik.errors.zipCode}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <Input
              name="location"
              label={t("driver.location")}
              value={driverFormik.values.location}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.location) &&
                Boolean(driverFormik.touched.location)
              }
              children={
                driverFormik.touched.location ? (
                  <> {driverFormik.errors.location}</>
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
              value={driverFormik.values.licenseNumber}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.licenseNumber) &&
                Boolean(driverFormik.touched.licenseNumber)
              }
              children={
                driverFormik.touched.licenseNumber ? (
                  <> {driverFormik.errors.licenseNumber}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <DateSelecter
              name="licenseValidity"
              views={["year", "month", "day"]}
              format={"MM.DD.YYYY"}
              value={
                // driverFormik.values.licenseValidity
                //   ?
                dayjs(driverFormik.values.licenseValidity) as unknown as string
                // : null
              }
              onChange={(value: any) => {
                // const date = dayjs(value)
                driverFormik.setFieldValue(
                  "licenseValidity",
                  value.format("MM.DD.YYYY")
                )
              }}
              error={
                Boolean(driverFormik.errors.licenseValidity) &&
                Boolean(driverFormik.touched.licenseValidity)
              }
              label={t("driver.validity")}
              children={
                driverFormik.touched.licenseValidity ? (
                  <> {driverFormik.errors.licenseValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <DropDownMenu
              name="licenseType"
              label={t("driver.licenseType")}
              value={driverFormik.values.licenseType}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.licenseType) &&
                Boolean(driverFormik.touched.licenseType)
              }
              children={
                driverFormik.touched.licenseType ? (
                  <> {driverFormik.errors.licenseType}</>
                ) : null
              }
              menuItems={licenseTypes.map((type, index) => {
                return (
                  <MenuItem key={index} value={type.value}>
                    {type.value}
                  </MenuItem>
                )
              })}
            />
          </Grid>
          <Grid item xs>
            <DateSelecter
              name="typeValidity"
              views={["year", "month", "day"]}
              format={"MM.DD.YYYY"}
              value={
                // driverFormik.values.typeValidity
                // ?
                dayjs(driverFormik.values.typeValidity) as unknown as string
                // : null
              }
              onChange={(value: any) =>
                driverFormik.setFieldValue(
                  "typeValidity",
                  value.format("MM.DD.YYYY")
                )
              }
              error={
                Boolean(driverFormik.errors.typeValidity) &&
                Boolean(driverFormik.touched.typeValidity)
              }
              label={t("driver.validity")}
              children={
                driverFormik.touched.typeValidity ? (
                  <> {driverFormik.errors.typeValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <DropDownMenu
              name="codeNum"
              label={t("driver.codeNum")}
              value={driverFormik.values.codeNum}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.codeNum) &&
                Boolean(driverFormik.touched.codeNum)
              }
              children={
                driverFormik.touched.codeNum ? (
                  <> {driverFormik.errors.codeNum}</>
                ) : null
              }
              menuItems={answers.map((answer, index) => {
                return (
                  <MenuItem key={index} value={answer.value}>
                    {answer.value}
                  </MenuItem>
                )
              })}
            />
          </Grid>
          <Grid item xs>
            <DateSelecter
              name="codeNumValidity"
              views={["year", "month", "day"]}
              format={"MM.DD.YYYY"}
              value={
                // driverFormik.values.codeNumValidity
                // ?
                dayjs(driverFormik.values.codeNumValidity) as unknown as string
                // : null
              }
              onChange={(value: any) =>
                driverFormik.setFieldValue(
                  "codeNumValidity",
                  value.format("MM.DD.YYYY")
                )
              }
              error={
                Boolean(driverFormik.errors.codeNumValidity) &&
                Boolean(driverFormik.touched.codeNumValidity)
              }
              label={t("driver.validity")}
              children={
                driverFormik.touched.codeNumValidity ? (
                  <> {driverFormik.errors.codeNumValidity}</>
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
              value={driverFormik.values.driverCardNum}
              onChange={driverFormik.handleChange}
              error={
                Boolean(driverFormik.errors.driverCardNum) &&
                Boolean(driverFormik.touched.driverCardNum)
              }
              children={
                driverFormik.touched.driverCardNum ? (
                  <> {driverFormik.errors.driverCardNum}</>
                ) : null
              }
            />
          </Grid>
          <Grid item xs>
            <DateSelecter
              name="driverCardValidity"
              views={["year", "month", "day"]}
              format={"MM.DD.YYYY"}
              value={
                // driverFormik.values.driverCardValidity
                // ?
                dayjs(
                  driverFormik.values.driverCardValidity
                ) as unknown as string
                // : null
              }
              onChange={(value: any) =>
                driverFormik.setFieldValue(
                  "driverCardValidity",
                  value.format("MM.DD.YYYY")
                )
              }
              error={
                Boolean(driverFormik.errors.driverCardValidity) &&
                Boolean(driverFormik.touched.driverCardValidity)
              }
              label={t("driver.validity")}
              children={
                driverFormik.touched.driverCardValidity ? (
                  <> {driverFormik.errors.driverCardValidity}</>
                ) : null
              }
            />
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="space-between">
          <GridNoSpace style={{ width: "30%", columnGap: 25 }}>
            <FormButton children={t("main.register")} />
            <BasicButton
              children={t("main.cancel")}
              onClick={() => navigate("/drivers")}
            />
          </GridNoSpace>
          <InputFileUpload onClick={() => setLocatedFile("drivers")} />
        </Grid>
      </Form>
    </AddFormHolder>
  )
}

export default AddNewDriver
