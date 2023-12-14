import { IBlock } from "../../../types/interfaces";

const GridColumn = (props: IBlock) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default GridColumn;
