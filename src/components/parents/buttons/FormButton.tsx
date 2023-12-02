import { Button } from "@mui/material";
import colors from "../../../assets/theme/colors";

const FormButton = (props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
        borderRadius: "12px",
        marginTop: "18px",
        width: "100%",
        height: "48px",
        border: `1px solid ${colors.purple}`,
        ...props.style,
      }}
    >
      {props.children}
    </Button>
  );
};

export default FormButton;
