import { IBlock } from "../../../types/interfaces";

const Grid = (props: IBlock) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Grid;
