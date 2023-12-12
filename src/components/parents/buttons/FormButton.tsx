import { Button } from "@mui/material";
import colors from "../../../assets/theme/colors";
import { IFormButton } from "../../../types/interfaces";

const FormButton = (props: IFormButton) => {
  return (
    <Button
      type="submit"
      disableRipple
      variant="contained"
      fullWidth
      style={{
        backgroundColor: colors.purple,
        color: colors.white,
        fontFamily: "Inter, sans-serif",
        padding: "11px 24px",
        borderRadius: "10px",
        marginTop: "18px",
        width: "100%",
        height: "40px",
        border: `1px solid ${colors.purple}`,
        ...props.style,
      }}
    >
      {props.children}
    </Button>
  );
};

export default FormButton;
