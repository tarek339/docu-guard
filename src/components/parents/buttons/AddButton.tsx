import { Button } from "@mui/material";

const AddButton = (props: {
  style?: React.CSSProperties;
  children: React.ReactNode;
  icon?: JSX.Element;
  bgColor: string;
  color: string;
  disableElevation?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button
      variant="contained"
      startIcon={props.icon}
      disableElevation={props.disableElevation}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        fontFamily: "Inter, sans-serif",
        borderRadius: "10px",
        height: "40px",
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default AddButton;
