import React from "react";

const GridNoSpace = (props: {
  children: JSX.Element | React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
