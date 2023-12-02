const Block = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
};

export default Block;
