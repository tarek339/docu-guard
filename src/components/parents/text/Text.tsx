import { ThemeProvider, Typography, createTheme } from "@mui/material";
import { IText } from "../../../types/interfaces";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans',sans-serif;",
  },
});

const Text = (props: IText) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        onClick={props.onClick}
        variant={props.variant}
        style={props.style}
      >
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default Text;
