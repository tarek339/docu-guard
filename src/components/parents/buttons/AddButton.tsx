import { Button } from "@mui/material";

const AddButton = (props: {
  style?: React.CSSProperties;
  children: React.ReactNode;
  icon?: JSX.Element;
  bgColor: string;
  color: string;
  disableElevation?: boolean;
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
        borderRadius: "12px",
        height: "40px",
        ...props.style,
      }}
    >
      {props.children}
    </Button>
  );
};

export default AddButton;
