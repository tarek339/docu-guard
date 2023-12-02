import React from "react";

const Flex = (props: {
  children: JSX.Element | React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Flex;
