import {
  ThemeProvider,
  Typography,
  TypographyPropsVariantOverrides,
  createTheme,
} from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans',sans-serif;",
  },
});

const Text = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?:
    | OverridableStringUnion<
        Variant | "inherit",
        TypographyPropsVariantOverrides
      >
    | undefined;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant={props.variant} style={props.style}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default Text;
