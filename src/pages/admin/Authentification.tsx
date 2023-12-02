import { FormHolder } from "../../components";
import { Flex, Block } from "../../components/parents/container";

const Authentification = () => {
  return (
    <Flex>
      <Block
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormHolder />
      </Block>
      <Block
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
          width: "50%",
          height: "100%",
        }}
      />
    </Flex>
  );
};

export default Authentification;
