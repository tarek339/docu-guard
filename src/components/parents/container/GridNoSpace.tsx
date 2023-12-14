import { IBlock } from "../../../types/interfaces";

const GridNoSpace = (props: IBlock) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default GridNoSpace;
