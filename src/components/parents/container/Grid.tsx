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
        width: "100%",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Grid;
