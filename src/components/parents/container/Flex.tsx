import { IBlock } from "../../../types/interfaces";

const Flex = (props: IBlock) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Flex;
