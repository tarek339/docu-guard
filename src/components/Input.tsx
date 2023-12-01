import { withStyles } from "@material-ui/styles";
import { TextField } from "@mui/material";
import Block from "./Block";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const CustomTextField = withStyles({
  root: {
    "& .MuiFilledInput-root": {
      border: "1px solid #d3d3d3cc",
      backgroundColor: "#fff",
      borderRadius: "10px",
      height: "53px",
    },
    "&:hover .MuiFilledInput-root": {
      border: "1px solid lightgrey",
      backgroundColor: "#fff",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      border: "2px solid rgb(99, 102, 241)",
      backgroundColor: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      backgroundColor: "#fff",
      color: "rgb(99, 102, 241)",
    },
    "& .MuiFilledInput-root.Mui-error": {
      border: "2px solid #f04438",
    },
    "& .MuiInputLabel-root.Mui-error": {
      color: "#f04438",
    },
  },
})(TextField);

const error: React.CSSProperties = {
  color: "#f04438",
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
