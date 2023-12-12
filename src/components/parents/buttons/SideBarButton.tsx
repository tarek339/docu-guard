import { Button } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import colors from "../../../assets/theme/colors";
import Block from "../container/Block";
import { ISideBarButton } from "../../../types/interfaces";

const CustomButton = withStyles({
  root: {
    "&.MuiButton-root": {
      background: "none",
      backgroundColor: "transparent",
      borderRadius: "10px",
      height: "38px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "6px 16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      color: colors.smoothGrey,
      marginTop: "5px",
      marginBottom: "5px",
    },
    "&.MuiButton-root:hover": {
      color: colors.white,
      backgroundColor: colors.bgSideBarBtn,
    },
    "&:focus": {
      color: colors.white,
      backgroundColor: colors.bgSideBarBtn,
    },
    "&.MuiButton-root:focus .MuiButton-startIcon": {
      color: colors.purple,
    },
  },
})(Button);

const blockStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  height: "100%",
  alignItems: "center",
};

const SideBarButton = (props: ISideBarButton) => {
  return (
    <CustomButton
      disableElevation
      onClick={props.onClick}
      startIcon={props.icon}
      fullWidth
    >
      <Block style={blockStyle}>
        <Block>{props.firstLetter}</Block>
        <Block style={{ textTransform: "lowercase" }}>{props.rest}</Block>
      </Block>
    </CustomButton>
  );
};

export default SideBarButton;
