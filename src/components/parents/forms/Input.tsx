import { withStyles } from "@material-ui/styles";
import { TextField } from "@mui/material";
import Block from "../container/Block";
import colors from "../../../assets/theme/colors";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      border: `1px solid ${colors.greyLight}`,
      backgroundColor: colors.white,
      borderRadius: "10px",
      height: "53px",
    },
    "&:hover .MuiFilledInput-root": {
      border: "1px solid lightgrey",
      backgroundColor: colors.greyWhite,
    },
    "& .MuiFilledInput-root.Mui-focused": {
      border: `2px solid ${colors.purple}`,
      backgroundColor: colors.white,
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

const error: React.CSSProperties = {
  color: colors.error,
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
  paddingLeft: "15px",
  position: "absolute",
  bottom: -10,
};

const field: React.CSSProperties = {
  marginTop: "20px",
};

const Input = (props: {
  name: string;
  label: string;
  value: string;
  onChange: InputChangeHandler;
  error: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Block style={{ position: "relative" }}>
      <CustomTextField
        name={props.name}
        InputProps={{ disableUnderline: true }}
        label={props.label}
        variant="filled"
        fullWidth
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        margin="normal"
        style={field}
      />
      <Block style={error}>{props.children}</Block>
    </Block>
  );
};

export default Input;
