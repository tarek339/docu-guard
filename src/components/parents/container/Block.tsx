const Block = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <div style={props.style}>{props.children}</div>;
};

export default Block;
