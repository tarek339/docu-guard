import { Button, ButtonPropsVariantOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

const ButtonContained = (props: {
  children: React.ReactNode;
  variant:
    | OverridableStringUnion<
        "text" | "contained" | "outlined",
        ButtonPropsVariantOverrides
      >
    | undefined;
  backgroundColor: string;
  color: string;
  padding?: string | number;
  style: React.CSSProperties;
  disableRipple?: boolean;
}) => {
  return (
    <Button
      disableRipple={props.disableRipple}
      variant={props.variant}
      fullWidth
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontFamily: "Inter, sans-serif",
        ...props.style,
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonContained;
