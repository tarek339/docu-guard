import Alerts from "../Alerts";
import { Block } from "../container";
import { TextHeader } from "../text";
import styles from "../../../assets/theme/styles";
import colors from "../../../assets/theme/colors";
import { useData } from "../../../context/AppContext";
import { IAddFormHolder } from "../../../types/interfaces";

const AddFormHolder = (props: IAddFormHolder) => {
  const { resMessage } = useData();

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
