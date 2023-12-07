import { Snackbar } from "@mui/material";
import Alert, { AlertColor } from "@mui/material/Alert";
import { useFunctionsData } from "../../context/FunctionsContext";

const Alerts = (props: {
  severity: AlertColor | undefined;
  message: string;
}) => {
  const { openAlert, setOpenAlert } = useFunctionsData();

  const handleClose = (_e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      open={openAlert}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert variant="filled" severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
