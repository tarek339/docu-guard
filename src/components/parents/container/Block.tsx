import { IBlock } from "../../../types/interfaces";

const Block = (props: IBlock) => {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
};

export default Block;
