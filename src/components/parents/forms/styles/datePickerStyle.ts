import colors from "../../../../assets/theme/colors";

export const inputStyle = {
  "&.MuiFilledInput-root": {
    border: `2px solid ${colors.greyLight}`,
    backgroundColor: colors.white,
    borderRadius: "10px",
    height: "53px",
    fontSize: "14px",
  },
  "&:hover.MuiFilledInput-root": {
    border: "2px solid lightgrey",
    backgroundColor: colors.greyWhite,
  },
  "&.MuiFilledInput-root.Mui-focused": {
    border: `2px solid ${colors.purple}`,
    backgroundColor: colors.white,
  },
  "&.MuiFilledInput-root.Mui-error": {
    border: `2px solid ${colors.error}`,
  },
  "&.MuiInputLabel-root.Mui-error": {
    color: colors.error,
  },
};

export const labelStyle = {
  "&.MuiInputLabel-root": {
    fontSize: "14px",
  },
  "&.MuiInputLabel-root.Mui-focused": {
    backgroundColor: colors.white,
    color: colors.purple,
  },
};
