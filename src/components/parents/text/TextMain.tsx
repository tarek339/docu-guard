import { ThemeProvider, Typography, createTheme } from "@mui/material";
import colors from "../../../assets/theme/colors";
import { ITextProps } from "../../../types/interfaces";

const theme = createTheme({
  typography: {
    fontFamily:
      "Inter, -apple-system,BlinkMacSystemFont, Segoe UI ,Helvetica,Arial,sans-serif, Apple Color Emoji , Segoe UI Emoji",
  },
});

const TextMain = (props: ITextProps) => {
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
