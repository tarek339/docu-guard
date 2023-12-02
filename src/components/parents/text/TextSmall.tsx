import { ThemeProvider, Typography, createTheme } from "@mui/material";
import colors from "../../../assets/theme/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const TextSmall = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        style={{
          fontSize: "14px",
          color: colors.grey,
          ...props.style,
        }}
      >
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default TextSmall;
