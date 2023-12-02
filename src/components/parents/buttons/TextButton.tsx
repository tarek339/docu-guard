import { Link } from "@mui/material";
import colors from "../../../assets/theme/colors";
import Text from "../text/Text";

const TextButton = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}) => {
  return (
    <Link href="#" underline="hover" style={{ color: colors.purple }}>
      <Text style={{ fontSize: "14px" }} onClick={props.onClick}>
        {props.children}
      </Text>
    </Link>
  );
};

export default TextButton;
