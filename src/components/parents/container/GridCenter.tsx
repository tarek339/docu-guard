import React from "react";

const GridCenter = (props: {
  children: JSX.Element | React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
