import React from "react";

const Grid = (props: {
  children: JSX.Element | React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
