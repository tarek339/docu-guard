import { ThemeProvider, Typography, createTheme } from "@mui/material";
import colors from "../../../assets/theme/colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
});

const TextHeader = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: colors.fontBlack,
          ...props.style,
        }}
      >
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default TextHeader;
