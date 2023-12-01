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
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      type={props.type}
      disableRipple={props.disableRipple}
      variant={props.variant}
      fullWidth
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontFamily: "Inter, sans-serif",
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonContained;
