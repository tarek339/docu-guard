import Block from "../../components/parents/container/Block";
import FormHolder from "../../components/FormHolder";
import Flex from "../../components/parents/container/Flex";

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
