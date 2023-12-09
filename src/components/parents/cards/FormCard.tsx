import colors from "../../../assets/theme/colors";
import styles from "../../../assets/theme/styles";
import { Block } from "../container";

const FormCard = (props: { children: React.ReactNode }) => {
  return (
    <Block
      style={{
        borderRadius: "20px",
        boxShadow: styles.shadow,
        backgroundColor: colors.white,
        padding: "32px 24px 32px 24px",
      }}
    >
      {props.children}
    </Block>
  );
};

export default FormCard;
