import colors from "../assets/theme/colors";
import { Block } from "./parents/container";

const Cards = () => {
  return (
    <Block
      style={{
        borderRadius: "20px",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.08)",
        height: "175px",
        width: "330px",
        backgroundColor: colors.white,
      }}
    ></Block>
  );
};

export default Cards;
