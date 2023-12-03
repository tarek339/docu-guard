import React from "react";

const GridColumn = (props: {
  children: JSX.Element | React.ReactNode;
  style?: React.CSSProperties;
}) => {
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
