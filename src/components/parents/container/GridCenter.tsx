import { IBlock } from "../../../types/interfaces";

const GridCenter = (props: IBlock) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default GridCenter;
