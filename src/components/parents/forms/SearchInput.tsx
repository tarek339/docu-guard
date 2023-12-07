import { TextField, InputAdornment } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import { SearchIcon } from "../../icons";
import colors from "../../../assets/theme/colors";

const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      border: `1px solid ${colors.greyLight}`,
      backgroundColor: colors.white,
      borderRadius: "8px",
      height: "48px",
      fontSize: "14px",
    },
    "& fieldset": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-root": {
      border: "1px solid lightgrey",
      backgroundColor: colors.greyWhite,
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      backgroundColor: colors.white,
    },
    "& .MuiInputLabel-root": {
      fontSize: "0px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      backgroundColor: colors.white,
    },
  },
})(TextField);

const SearchInput = () => {
  return (
    <CustomTextField
      variant="outlined"
      label="none"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
