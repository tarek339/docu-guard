import { Box } from "@mui/material";

const Block = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <Box style={props.style}>{props.children}</Box>;
};

export default Block;
