import { Link } from "@mui/material";
import colors from "../../../assets/theme/colors";
import Text from "../text/Text";
import { ITextButton } from "../../../types/interfaces";

const TextButton = (props: ITextButton) => {
  return (
    <Link href="#" underline="hover" style={{ color: colors.purple }}>
      <Text style={{ fontSize: "14px" }} onClick={props.onClick}>
        {props.children}
      </Text>
    </Link>
  );
};

export default TextButton;
