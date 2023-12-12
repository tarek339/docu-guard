import { withStyles } from "@material-ui/styles";
import { TextField } from "@mui/material";
import colors from "../../../../assets/theme/colors";

export const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      border: `2px solid ${colors.greyLight}`,
      backgroundColor: colors.white,
      borderRadius: "10px",
      height: "53px",
      fontSize: "14px",
    },
    "&:hover .MuiFilledInput-root": {
      border: "2px solid lightgrey",
      backgroundColor: colors.greyWhite,
    },
    "& .MuiFilledInput-root.Mui-focused": {
      border: `2px solid ${colors.purple}`,
      backgroundColor: colors.white,
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      backgroundColor: colors.white,
      color: colors.purple,
    },
    "& .MuiFilledInput-root.Mui-error": {
      border: `2px solid ${colors.error}`,
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: colors.error,
    },
  },
})(TextField);

export const errorStyle: React.CSSProperties = {
  color: colors.error,
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
  paddingLeft: "15px",
  position: "absolute",
  bottom: -10,
};
