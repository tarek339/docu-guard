import Block from "../../components/Block";
import SignInFormHolder from "../../components/SignInFormHolder";

const Authentification = () => {
  return (
    <Block
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Block
        style={{
          backgroundColor: "#FFF",
          width: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SignInFormHolder />
      </Block>
      <Block
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
          width: "50%",
          height: "100%",
        }}
      />
    </Block>
  );
};

export default Authentification;
