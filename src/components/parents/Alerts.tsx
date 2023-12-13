import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useData } from "../../context/AppContext";
import { IAlerts } from "../../types/interfaces";

const Alerts = (props: IAlerts) => {
  const { openAlert, setOpenAlert } = useData();

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
