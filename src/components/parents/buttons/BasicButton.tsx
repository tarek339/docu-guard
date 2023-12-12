import { Button } from "@mui/material";
import colors from "../../../assets/theme/colors";
import { IBasicButton } from "../../../types/interfaces";

const BasicButton = (props: IBasicButton) => {
  return (
    <Button
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
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default BasicButton;
