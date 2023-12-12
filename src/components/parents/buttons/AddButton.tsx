import { Button } from "@mui/material";
import { IAddButton } from "../../../types/interfaces";

const AddButton = (props: IAddButton) => {
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
