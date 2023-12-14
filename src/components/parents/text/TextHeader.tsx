import { ThemeProvider, Typography, createTheme } from "@mui/material";
import colors from "../../../assets/theme/colors";
import { ITextProps } from "../../../types/interfaces";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans',sans-serif",
  },
});

const TextHeader = (props: ITextProps) => {
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
