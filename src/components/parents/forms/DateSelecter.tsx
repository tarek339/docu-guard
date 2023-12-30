import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"
import { Block } from "../container"
import { useState } from "react"
import { IDateSelecter } from "../../../types/interfaces"
import { errorStyle, inputStyle, labelStyle } from "."
import colors from "../../../assets/theme/colors"
import styles from "../../../assets/theme/styles"

export default function DateSelecter(props: IDateSelecter) {
  const [onFocus, setOnFocus] = useState(false)
  return (
    <Block style={{ position: "relative" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.label}
          views={props.views}
          format={props.format}
          value={props.value}
          onChange={props.onChange}
          slotProps={{
            desktopPaper: {
              elevation: 0,
              sx: {
                boxShadow: styles.shadow,
                border: `1px solid ${colors.greyLight}`,
                borderRadius: "10px"
              }
            },
            actionBar: {
              sx: {
                "&.MuiPickersYear-yearButton": {
                  backgroundColor: "red"
                }
              }
            },
            calendarHeader: {
              sx: {
                borderBottom: `1px solid ${colors.greyLight}`,
                marginBottom: "0px",
                paddingBottom: "8px"
              }
            },
            day: {
              onMouseDown: () => setOnFocus(false),
              onBlur: () => setOnFocus(false),
              sx: {
                "&.MuiPickersDay-today": {
                  color: colors.purple,
                  fontWeight: "bold",
                  backgroundColor: colors.white
                },
                "&.MuiButtonBase-root.Mui-selected": {
                  backgroundColor: colors.purple,
                  color: colors.white
                },
                "&.MuiButtonBase-root": {
                  border: "none",
                  "&:hover": {
                    backgroundColor: colors.purple,
                    color: colors.white
                  },
                  "&:active": {
                    backgroundColor: colors.purple,
                    color: colors.white
                  }
                }
              }
            },
            openPickerButton: {
              onMouseDown: () => setOnFocus(true),
              sx: {
                "&.MuiButtonBase-root": {
                  color: onFocus ? colors.purple : ""
                },
                "& .MuiTouchRipple-root .Mui-error": {
                  color: colors.error
                }
              }
            },
            textField: {
              onMouseDown: () => setOnFocus(true),
              onBlur: () => setOnFocus(false),
              name: props.name,
              margin: "normal",
              fullWidth: true,
              variant: "filled",
              error: props.error,
              InputProps: {
                disableUnderline: true,
                sx: inputStyle
              },
              InputLabelProps: {
                sx: labelStyle
              }
            }
          }}
        />
      </LocalizationProvider>
      <Block style={errorStyle}>{props.children}</Block>
    </Block>
  )
}
