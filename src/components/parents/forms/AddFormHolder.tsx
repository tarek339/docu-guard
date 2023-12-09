import Alerts from "../Alerts";
import { Block } from "../container";
import { TextHeader } from "../text";
import { useFunctionsData } from "../../../context";
import styles from "../../../assets/theme/styles";
import colors from "../../../assets/theme/colors";

const AddFormHolder = (props: {
  children: JSX.Element;
  header: React.ReactNode;
}) => {
  const { resMessage } = useFunctionsData();
  return (
    <Block style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <Alerts severity={"success"} message={resMessage} />
      <Block
        style={{
          borderRadius: "20px",
          boxShadow: styles.shadow,
          backgroundColor: colors.white,
          padding: "32px 24px 32px 24px",
        }}
      >
        <TextHeader>{props.header}</TextHeader>
        {props.children}
      </Block>
    </Block>
  );
};

export default AddFormHolder;
