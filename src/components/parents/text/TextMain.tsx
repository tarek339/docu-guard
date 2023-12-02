import { ThemeProvider, Typography, createTheme } from "@mui/material";
import colors from "../../../assets/theme/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const TextMain = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        style={{
          fontSize: "16px",
          color: colors.fontBlack,
          ...props.style,
        }}
      >
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default TextMain;
